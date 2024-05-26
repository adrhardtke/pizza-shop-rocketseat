import { Helmet } from "react-helmet-async";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { OrderTableFilters } from "./order-table-filters";
import OrderTableRow from "./order-table-row";

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="h-[64px]"></TableHead>
                <TableHead className="h-[140px]">Identificador</TableHead>
                <TableHead className="h-[180px]">Realizado há</TableHead>
                <TableHead className="h-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="h-[140px]">Total do pedido</TableHead>
                <TableHead className="h-[164px]"></TableHead>
                <TableHead className="h-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <OrderTableRow />
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
