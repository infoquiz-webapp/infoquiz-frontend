import { FieldError, FieldErrors } from "react-hook-form";

type Props = { errors: FieldError | undefined };

const InputErrors = ({ errors }: Props) => {
  return errors?.types
    ? Object.values(errors.types).map((type, index) => (
        <p
          key={index}
          className="text-red-500 text-sm"
        >
          {type}
        </p>
      ))
    : null;
};

export default InputErrors;
