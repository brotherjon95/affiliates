import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import BaseInput from '../../../components/UI/BaseInput.vue';

describe('<BaseInput />', () => {
  it('should displays correct placeholder', () => {
    const wrapper = mount(BaseInput);
    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe('Please enter radius');
  });

  it('should binds the input value correctly from searchTerm prop', () => {
    const wrapper = mount(BaseInput, {
      props: {
        searchTerm: 77,
        inputType: 'number',
        minValue: 0,
        maxValue: 100,
      },
    });

    const input = wrapper.find('input');
    expect(input.element.value).toBe('77');
  })

  it('should sets the correct input type', () => {
    const wrapper = mount(BaseInput, {
      props: {
        searchTerm: 100,
        inputType: 'number',
        minValue: 0,
        maxValue: 100,
      },
    });

    const input = wrapper.find('input');
    expect(input.element.type).toBe('number');
  });
  
  it('should render base input component when correct props are provided', () => {
    const wrapper = mount(BaseInput, {
      props: {
        searchTerm: 100,
        inputType: 'number',
        minValue: 0,
        maxValue: 200,
      },
    });

    const input = wrapper.find('input');

    expect(input.element.value).toBe('100');
    expect(input.element.type).toBe('number');
    expect(input.element.min).toBe('0');
    expect(input.element.max).toBe('200');
  });

  it('should emits search event when input change', async () => {
    const searchTerm = '10';
    const emitSearch = vi.fn();

    const wrapper = mount(BaseInput, {
      props: {
        searchTerm,
        inputType: 'number',
        minValue: 0,
        maxValue: 100,
      },
      emit: ['search'],
    });

    const input = wrapper.find('input');
    await input.setValue('400');

    expect(wrapper.emitted().search[0]).toEqual(['400']);
  });
});