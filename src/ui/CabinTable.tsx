import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../services/apiCabins";
import styled from "styled-components";
import CabinRow from "./CabinRow";
import Spinner from "./Spinner";

const Wrapper = styled.div`
  background-color: #e2e2e2;
  padding: 0.5rem;
  border-radius: 10px;
  width: 100%;
  margin-top: 2rem;
`;

const Table = styled.div`
  border: 1px solid #c1c1c1;
  font-size: 1.4rem;
  background-color: #f1f1f1;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.06),
    0 4px 6px -4px rgba(0, 0, 0, 0.05);
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: #e7e7e7;
  border-bottom: 1px solid #c1c1c1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  padding: 1.6rem 2.4rem;
`;

const CabinTable = () => {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
    refetchInterval: 5000,
  });

  if (isPending) return <Spinner />;

  return (
    <Wrapper>
      <Table role="table">
        <TableHeader role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        {cabins?.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </Table>
    </Wrapper>
  );
};

export default CabinTable;
