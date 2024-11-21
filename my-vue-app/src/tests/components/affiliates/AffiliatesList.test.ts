import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import AffiliatesList from '../../../components/affiliates/AffiliatesList.vue';
import affiliatesArray from '../../../data/affiliates.json';

describe('<AffiliatesList />', () => {
  let mockAffiliates;

  beforeEach(() => {
    mockAffiliates = affiliatesArray;
  });

  it('should filter date when radius is provided', async () => {
    const wrapper = mount(AffiliatesList, {
      props: {
        affiliates: mockAffiliates,
      },
    });

    await wrapper.setProps({ affiliates: mockAffiliates });
    await wrapper.vm.$nextTick();

    wrapper.vm.activeSearchTerm = 100;

    const displayedAffiliates = wrapper.vm.displayedAffiliates;
    expect(displayedAffiliates.length).toBe(14);
  });

  it('should calculate eligibility', () => {
    const wrapper = mount(AffiliatesList, {
      props: {
        affiliates: mockAffiliates,
      },
    });

    const result = wrapper.vm.affiliateIsEligible({
      lat: 53.3340285,
      lng: -6.2535495,
      radiusValue: 100,
    });

    expect(result).toBe(true);
  });
});
