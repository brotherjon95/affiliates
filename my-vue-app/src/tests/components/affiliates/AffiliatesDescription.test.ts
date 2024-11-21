import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AffiliatesDescription from '../../../components/affiliates/AffiliatesDescription.vue';

describe('<AffiliatesDescription />', () => {
  it('should render default slot content for affiliates description when slot content is provided', () => {
    const wrapper = mount(AffiliatesDescription, {
      slots: {
        default: 'affiliates description default content',
      },
    });
    expect(wrapper.html()).toContain('affiliates description default content');
  });

  it('should render slots content for affiliates description when slots are provided', () => {
    const wrapper = mount(AffiliatesDescription, {
      slots: {
        title: 'affiliates description title',
        default: 'affiliates description default content',
      },
    });

    expect(wrapper.html()).toContain('affiliates description title');
    expect(wrapper.html()).toContain('affiliates description default content');
  })
});