import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BaseButton from '../../../components/UI/BaseButton.vue';

describe('<BaseButton />', () => {
  it('should render default slot content for base button', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'base button content',
      },
    });
    expect(wrapper.text()).toBe('base button content');
  });

  it('should render default slot in base button inside button element', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'submit me',
      },
    });

    const button = wrapper.find('button');
    expect(button.text()).toBe('submit me');
  });
})