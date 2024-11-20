import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AffiliatesList from '../../../components/affiliates/AffiliatesList.vue';
import AffiliatesData from '../../../components/affiliates/AffiliatesData.vue';
import affiliatesListData from '../../../data/affiliates.json';

describe('<AffiliatesData />', () => {
  it('should renders the affiliates data component and pass props correctly to AffiliatesList', () => {
    const wrapper = mount(AffiliatesData, {
      global: {
        components: {
          AffiliatesList,
        },
      },
    });

    expect(wrapper.text()).toContain('Filter Affiliates');

    const affiliatesList = wrapper.findComponent(AffiliatesList);

    expect(affiliatesList.props('affiliates')).toEqual(affiliatesListData);
  });
});
