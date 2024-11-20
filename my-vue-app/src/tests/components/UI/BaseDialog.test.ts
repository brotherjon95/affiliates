import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BaseDialog from '../../../components/UI/BaseDialog.vue';

describe('<BaseDialog />', () => {
  it('should render base dialog component', () => {
    const wrapper = mount(BaseDialog);
    const dialog = wrapper.find('dialog');

    expect(dialog.exists()).toBe(true);
  });

  it('should render base dialog component and be opened by default', () => {
    const wrapper = mount(BaseDialog);
    const dialog = wrapper.find('dialog');

    expect(dialog.exists()).toBe(true);
    expect(dialog.element.open).toBe(true);
  });

  it('should render slot content for base dialog component inside the dialog', () => {
    const wrapper = mount(BaseDialog, {
      slots: {
        default: 'base dialog content',
      },
    });

    const dialog = wrapper.find('dialog');
    expect(dialog.text()).toBe('base dialog content');
  });
});
