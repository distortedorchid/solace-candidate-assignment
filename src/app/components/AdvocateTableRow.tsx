import { Advocate } from "../page";

function AdvocateTableRow({ advocate }: { advocate: Advocate }) {
  return (
    <tr key={advocate.id}>
      <td>{advocate.firstName}</td>
      <td>{advocate.lastName}</td>
      <td>{advocate.city}</td>
      <td>{advocate.degree}</td>
      <td>
        {advocate.specialties.map((s, n) => (
          <div key={n}>{s}</div>
        ))}
      </td>
      <td>{advocate.yearsOfExperience}</td>
      <td>{advocate.phoneNumber}</td>
    </tr>
  );
}

export { AdvocateTableRow };
