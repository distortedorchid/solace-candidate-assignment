import { Advocate } from '@/app/page';
import { Hospital } from '../icons/Hospital';
import { Phone } from '../icons/Phone';
import { Location } from '../icons/Location';
import { SpecialtyTagList } from '../tag/TagList';
import { AdvocateWithSpecialties } from '@/app/hooks/useAdvocateQuery';

function formatPhoneNumber(phone: string | number): string {
  const digits = String(phone).replace(/\D/g, ''); // remove non-digits
  return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

function AdvocateDetails({ advocate }: { advocate: AdvocateWithSpecialties }) {
  return (
    <div className={'mt-6'}>
      <ul className={'text-sm'}>
        <li className={'mb-1 flex'}>
          <Hospital size={18} className={'mr-1'} />
          {advocate.yearsOfExperience} years of experience
        </li>
        <li className={'mb-1 flex'}>
          <Location size={18} className={'mr-1'} />
          {advocate.city}
        </li>
        <li>
          <a
            href={`tel:${advocate.phoneNumber}`}
            className={'decoration-underline decoration flex'}
          >
            <Phone size={18} className={'mr-1'} />
            {formatPhoneNumber(advocate.phoneNumber)}
          </a>
        </li>
      </ul>
      <SpecialtyTagList items={advocate.specialties} />
    </div>
  );
}

export { AdvocateDetails };
