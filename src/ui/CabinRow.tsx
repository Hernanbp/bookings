import styled from "styled-components";
import { formatCurrency } from "../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../services/apiCabins";
import { Toaster, toast } from "sonner";
import Button from "./Button";

interface Cabin {
  created_at: string;
  description: string;
  discount: number;
  id: number;
  image: string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
}

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid #c1c1c1;
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-3px);
  border-radius: 3px;
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #363636;
`;

const Price = styled.div`
  font-weight: 600;
`;

const Discount = styled.div`
  font-weight: 600;
  color: #09831a;
`;

const toasterOptions = {
  style: {
    backgroundColor: "#f8f9fa",
    color: "#344034",
    borderRadius: "8px",
    padding: "1.6rem",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.05),0 4px 6px -4px rgba(0, 0, 0, 0.05)",
    transition: "all 200ms ease",
  },
};

const CabinRow = ({ cabin }: { cabin: Cabin }) => {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return (
    <TableRow role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity}</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <Button
        variation="danger"
        size="small"
        onClick={() => mutate(id)}
        disabled={isPending}
      >
        Delete
      </Button>
      <Toaster toastOptions={toasterOptions} />
    </TableRow>
  );
};

export default CabinRow;
