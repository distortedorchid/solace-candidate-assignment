import {
  SolaceComboBox,
  type ISolaceListItem
} from '../combobox/SolaceComboBox';
import { useAsyncList } from 'react-stately';
import { SolaceNumberField } from '../numberfield/SolaceNumberField';
import { useSearchContext } from '@/app/context/SearchContext';
import { MultiSelect } from '../multiselect/MultiSelect';

function Search() {
  const {
    location,
    setLocation,
    specialties,
    setSpecialties,
    degree,
    setDegree,
    minExperience,
    setMinimumExperience
  } = useSearchContext();

  // Load city options from API
  const cities = useAsyncList<ISolaceListItem>({
    async load() {
      const cities = await fetch('/api/cities').then((res) => res.json());
      return { items: cities };
    }
  });

  // Load specialty tags from API
  const specialtyTags = useAsyncList<any>({
    async load() {
      const tags = await fetch('/api/tags').then((res) => res.json());
      return { items: tags };
    }
  });

  const degrees = [
    { key: 1, title: 'MD' },
    { key: 2, title: 'PhD' },
    { key: 3, title: 'MSW' }
  ];

  return (
    <div className="mb-6 flex flex-col gap-4 px-6">
      <div className="flex gap-6">
        {/* Location dropdown */}
        <SolaceComboBox
          label="Location (City)"
          items={cities.items}
          selectedKey={location}
          onSelectionChange={(key) => setLocation(String(key))}
        />

        {/* Specialties dropdown (assume multi-select returns array of keys) */}

        <SolaceComboBox
          label="Degree"
          items={degrees}
          selectedKey={degree}
          onSelectionChange={(key) => setDegree(String(key))}
        />

        {/* Minimum experience number field */}
        <SolaceNumberField
          label="Minimum Years of Experience"
          value={minExperience ?? 0}
          onChange={(val) => setMinimumExperience(Number(val))}
        />
      </div>
      <MultiSelect
        items={specialtyTags.items}
        selectedKeys={specialties}
        onSelectionChange={(keys) =>
          setSpecialties(Array.from(keys).map(Number))
        }
      />
    </div>
  );
}

export { Search };
