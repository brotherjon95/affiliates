import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AffiliatesMember from '../../../components/affiliates/AffiliatesMember.vue';

const memberData= {
  id: 777,
  name: 'John Doe',
  latitude: 1111.1111,
  longitude: -2222.2222,
};

describe('<AffiliatesMember />', () => {
  it('should render the name prop correctly', () => {
    const wrapper = mount(AffiliatesMember, {
      props: memberData,
    });

    expect(wrapper.html()).toContain('John Doe');
  });

  it('should render the ID prop correctly', () => {
    const wrapper = mount(AffiliatesMember, {
      props: memberData,
    });

    expect(wrapper.html()).toContain('ID: <strong data-v-f1330fb2="">777</strong>');
  });
});
