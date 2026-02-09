import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { useEffect, useState } from "react";
import { fetchSellerOrders, updateOrderStatus } from "../../../state/seller/sellerOrderSlice";
import { useSelector } from "react-redux";
import { OrderStatus, type Order, type OrderItem } from "../../../types/orderTypes";
import { Button, Menu, MenuItem } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const orderStatusColor = {
  PENDING: { color: "#FFA500", label: "PENDING" },
  CONFIRMED: { color: "#F5BCBA", label: "CONFIRMED" },
  PLACED: { color: "#F5BCBA", label: "PLACED" },
  SHIPPED: { color: "#1E90FF", label: "SHIPPED" },
  DELIVERED: { color: "#32CD32", label: "DELIVERED" },
  CANCELLED: { color: "#FF0000", label: "CANCELLED" },
};

const orderStatus:{color:string, label: OrderStatus}[] = [
  { color: "#FFA500", label: OrderStatus.PENDING },
  { color: "#F5BCBA", label: OrderStatus.CONFIRMED },
  { color: "#F5BCBA", label: OrderStatus.PLACED },
  { color: "#1E90FF", label: OrderStatus.SHIPPED },
  { color: "#32CD32", label: OrderStatus.DELIVERED },
  { color: "#FF0000", label: OrderStatus.CANCELLED },
];

export default function OrderTable() {
  const dispatch = useAppDispatch();
  const { sellerOrder } = useAppSelector((store) => store);

  const [anchorEl, setAnchorEl] = useState({});
  const open = Boolean(anchorEl);

  const handleClick = (event: any, orderId: number) => {
    setAnchorEl((prev: any) => ({ ...prev, [orderId]: event.currentTarget }));
  };

  const handleClose = (orderId: number) => {
    setAnchorEl((prev: any) => ({ ...prev, [orderId]: null }));
  };

  const handleUpdateOrderStatus = (orderId:number, orderStatus:OrderStatus) => {
    dispatch(updateOrderStatus({jwt:localStorage.getItem("jwt") || "", orderId, orderStatus}))
  }

  useEffect(() => {
    dispatch(fetchSellerOrders(localStorage.getItem("jwt") || ""));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order Id</StyledTableCell>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell align="right">Shipping Address</StyledTableCell>
            <StyledTableCell align="right">Order Status</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerOrder.orders.map((item: Order) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.id}
              </StyledTableCell>
              <StyledTableCell>
                <div className="flex gap-1 flex-wrap">
                  {item.orderItems.map((orderItem: OrderItem) => (
                    <div className="flex gap-5">
                      <img
                        className="w-20 rounded-md"
                        src={orderItem.product.images[0]}
                      />
                      <div className="flex flex-col justify-between py-2">
                        <h1>Title: {orderItem.product.title}</h1>
                        <h1>Selling Price: {orderItem.product.sellingPrice}</h1>
                        <h1>Color: {orderItem.product.color}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div className="flex flex-col gap-y-2">
                  <h1>{item.shippingAddress.name}</h1>
                  <h1>
                    {item.shippingAddress.address}, {item.shippingAddress.city}
                  </h1>
                  <h1>
                    {item.shippingAddress.state} -{" "}
                    {item.shippingAddress.pinCode}
                  </h1>
                  <h1>
                    <strong>Mobile:</strong> {item.shippingAddress.mobile}
                  </h1>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <span className="px-5 py-2 border rounded-full text-teal-500 border-teal-500">
                  {item.orderStatus}
                </span>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  size="small"
                  color="primary"
                  onClick={(e) => handleClick(e, item.id)}
                >
                  status
                </Button>
                <Menu
                  id={`status-menu ${item.id}`}
                  anchorEl={anchorEl[item.id]}
                  open={Boolean(anchorEl[item.id])}
                  onClose={() => handleClose(item.id)}
                  slotProps={{
                    list: {
                      "aria-labelledby": `status-menu ${item.id}`,
                    },
                  }}
                >
                  {orderStatus.map((status) => (
                    <MenuItem key={status.label} onClick={() => handleUpdateOrderStatus(item.id, status.label)}>
                      {status.label}
                    </MenuItem>
                  ))}
                </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
