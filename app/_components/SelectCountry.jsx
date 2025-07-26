import { getCountries } from "../_lib/data-service";

async function SelectCountry() {
  const countries = await getCountries();

  if (!countries || countries.length === 0) return null;

  return (
    <select
      name="country"
      id="country"
      required
      defaultValue=""
      className="w-full border text-gray border-gray h-[71px] pl-5"
    >
      <option value="" disabled>
        Select a country
      </option>
      {countries.map((country) => (
        <option key={country.name} value={country.name}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
