import styled, { css } from "styled-components";
import Button from "./Button";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Textarea from "./Textarea";
import FileInput from "./FileInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../services/apiCabins";
import { toast } from "sonner";

const Wrapper = styled.div`
  background-color: #e2e2e2;
  padding: 0.5rem;
  border-radius: 10px;
  width: 100%;
`;

const Form = styled.form<{ type?: string }>`
  ${(props) =>
    props.type !== "modal" &&
    css`
      padding: 2.4rem 4rem;
      background-color: #f1f1f1;
      border: 1px solid #c1c1c1;
      border-radius: 7px;
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.06),
    0 4px 6px -4px rgba(0, 0, 0, 0.05);
`;

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data: any) {
    if (!isPending) {
      mutate(data);
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Label htmlFor="name">Cabin name</Label>
          <Input
            {...register("name", { required: true })}
            type="text"
            id="name"
          />
          {errors.name && <Error>This field is required</Error>}
        </FormRow>

        <FormRow>
          <Label htmlFor="maxCapacity">Maximum capacity</Label>
          <Input {...register("maxCapacity")} type="number" id="maxCapacity" />
        </FormRow>

        <FormRow>
          <Label htmlFor="regularPrice">Regular price</Label>
          <Input
            {...register("regularPrice")}
            type="number"
            id="regularPrice"
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="discount">Discount</Label>
          <Input
            {...register("discount")}
            type="number"
            id="discount"
            defaultValue={0}
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="description">Description for website</Label>
          <Textarea
            {...register("description")}
            id="description"
            defaultValue=""
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="image">Cabin photo</Label>
          <FileInput id="image" accept="image/*" />
        </FormRow>

        <FormRow>
          <Button variation="secondary" type="reset">
            Cancel
          </Button>
          <Button disabled={isPending}>Add cabin</Button>
        </FormRow>
      </Form>
    </Wrapper>
  );
}

export default CreateCabinForm;
