import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BaseContainer from '../../../components/UI/BaseContainer.vue';

describe('<BaseContainer />', () => {
  it('should render base container', () => {
    const wrapper = mount(BaseContainer);
    const baseContainer = wrapper.find('.base-container');
    expect(baseContainer.exists()).toBe(true);
    expect(baseContainer.classes()).toContain('base-container');
  });

  it('should render slot content for base container when slot content is provided', () => {
    const wrapper = mount(BaseContainer, {
      slots: {
        default: 'base container content',
      },
    });
    const baseContainer = wrapper.find('.base-container');
    expect(baseContainer.text()).toBe('base container content');
  });
});
