import { useState } from "react";
import { useMenu } from "react-instantsearch-hooks-web";
import Select from "components/forms/select";

export default function SelectFacet(props) {
  const [selectValue, setSelectValue] = useState("");

  const { items, refine } = useMenu(props);

  const options = [{ name: "all results", value: "" }];
  items.map((item) =>
    options.push({
      name: item.label,
      value: item.value,
    })
  );

  return (
    <div>
      <Select
        value={selectValue}
        onChange={(event) => {
          setSelectValue(event.target.value);
          refine(event.target.value);
        }}
        options={options}
      />
    </div>
  );
}
