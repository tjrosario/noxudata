interface DropdownOption {
  label: string;
  value: string;
}

interface InlineLeadingSelectProps {
  inputIcon?: any;
  inputLabel?: string;
  placeholder?: string;
  options: DropdownOption[];
  selectIcon?: any;
  selectLabel?: string;
}

export default function InlineLeadingSelect({
  inputIcon,
  inputLabel,
  options = [],
  placeholder,
  selectIcon,
  selectLabel,
}: InlineLeadingSelectProps) {
  return (
    <div className="border border-gray-300 border-solid rounded-md px-3">
      <div>
        {inputLabel && (
          <label
            htmlFor="hs-inline-leading-select-label"
            className="block text-sm font-medium mb-2"
          >
            {inputLabel}
          </label>
        )}
        <div className="relative">
          <input
            type="text"
            id="hs-inline-leading-select-label"
            name="inline-add-on"
            className="py-2 px-4 ps-24 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            placeholder={placeholder}
          />
          {inputIcon && (
            <div className="absolute end-0 inset-y-0 top-2 cursor-pointer">
              {inputIcon}
            </div>
          )}
          <div className="absolute inset-y-0 start-0 flex items-center text-gray-500 ps-px border-r border-solid border-gray-300 gap-1 px-2">
            {selectLabel && (
              <label
                htmlFor="hs-inline-leading-select-country"
                className="sr-only"
              >
                {selectLabel}
              </label>
            )}
            {selectIcon}
            <select
              id="hs-inline-leading-select-country"
              name="hs-inline-leading-select-country"
              className="block w-full border-transparent rounded-md focus:outline-none text-sm text-black"
            >
              {options.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
