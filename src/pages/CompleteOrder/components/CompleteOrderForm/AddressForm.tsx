import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export default function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        className="number"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento "
        className="complement"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register("district")}
        className="neighborhood"
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        {...register("city")}
        className="city"
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        className="uf"
        {...register("uf")}
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  );
}
