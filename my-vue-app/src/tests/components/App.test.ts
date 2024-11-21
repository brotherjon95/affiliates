import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AffiliatesDescription from '../../components/affiliates/AffiliatesDescription.vue';
import AffiliatesData from '../../components/affiliates/AffiliatesData.vue';
import App from '../../App.vue';

describe('<App />', () => {

  it('should render component', async () => {
    const wrapper = mount(App);

    const affiliatesDescription = wrapper.findComponent(AffiliatesDescription);
    const affiliatesData = wrapper.findComponent(AffiliatesData);

    expect(affiliatesDescription.exists()).toBe(true);
    expect(affiliatesData.exists()).toBe(true);
  });

  it('should render main title', async () => {
    const wrapper = mount(App);

    const titleSlot = wrapper.find('h1');
    expect(titleSlot.exists()).toBe(true);
    expect(titleSlot.text()).toBe('Affiliates List');
  });

  it('should render description', async () => {
    const wrapper = mount(App);

    const desc1 = wrapper.findAll('p').at(0);
    expect(desc1.exists()).toBe(true);
    expect(desc1?.text()).toContain('Here you can find a list of our Affiliates. Our base office is located in Dublin');

    const desc2 = wrapper.findAll('p').at(1);
    expect(desc2.exists()).toBe(true);
    expect(desc2?.text()).toContain('Within the given input, you can filter our Affiliates by radius');
  });
});
