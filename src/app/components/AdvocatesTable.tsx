import { useMemo } from "react";
import type { AdvocateList } from "../page";
import { AdvocateTableRow } from "./AdvocateTableRow";

function AdvocatesTable({
  advocates,
  searchTerm,
}: {
  searchTerm?: string;
  advocates: AdvocateList;
}) {
  const advocatesList = useMemo(() => {
    if (!searchTerm) {
      return advocates;
    }

    return advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm) ||
        advocate.yearsOfExperience === parseInt(searchTerm)
      );
    });
  }, [searchTerm, advocates]);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocatesList.map((advocate) => (
          <AdvocateTableRow {...{ advocate }} />
        ))}
      </tbody>
    </table>
  );
}

export { AdvocatesTable };
