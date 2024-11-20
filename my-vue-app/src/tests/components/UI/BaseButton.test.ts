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

  // it('it should apply the active class to component when button is clicked', async () => {
  //   const wrapper = mount(BaseButton);

  //   const button = wrapper.find('button');
  //   await button.trigger('click'); // Trigger a click event
  //   expect(button.classes()).toContain('active'); // Ensure the button gets the 'active' class
  // });

  it('should render default slot in base button inside button element', async () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'submit me',
      },
    });

    const button = wrapper.find('button');
    expect(button.text()).toBe('submit me');
  });
})