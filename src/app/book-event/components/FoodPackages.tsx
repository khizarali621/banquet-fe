import Checkboxs from "@/components/common/Forms/Checkbox";
import Select from "@/components/common/Forms/Select";
import TableSelect from "@/components/common/Forms/TableSelect";
import { Edit, Plus, Trash } from "@/components/common/Icons";
import Table from "@/components/ui/Table";
import React from "react";
const eventGuest = [
  { id: 1, name: "Chicken Menu 1" },
  { id: 2, name: "Chicken Menu 2" },
  { id: 3, name: "Chicken Menu 3" },
  { id: 4, name: "Chicken Menu 4" },
];

const menuItems1 = [
  { id: 1, name: "Chicken Qorma" },
  { id: 2, name: "Chicken Biryani" },
  { id: 3, name: "Garlic Naan" },
  { id: 4, name: "Salad" },
  { id: 5, name: "Water" },
  { id: 6, name: "Chicken Broast" },
  { id: 7, name: "Tea" },
];
const menuItems2 = [
  { id: 1, name: "Chicken Biryani" },
  { id: 2, name: "Chicken Qorma" },
  { id: 3, name: "Garlic Naan" },
  { id: 4, name: "Salad" },
  { id: 5, name: "Water" },
  { id: 6, name: "Chicken Broast" },
  { id: 7, name: "Tea" },
];
const menuItems3 = [
  { id: 1, name: "Garlic Naan" },
  { id: 2, name: "Chicken Biryani" },
  { id: 3, name: "Chicken Qorma" },
  { id: 4, name: "Salad" },
  { id: 5, name: "Water" },
  { id: 6, name: "Chicken Broast" },
  { id: 7, name: "Tea" },
];
const menuItems4 = [
  { id: 1, name: "Salad" },
  { id: 2, name: "Chicken Biryani" },
  { id: 3, name: "Garlic Naan" },
  { id: 4, name: "Chicken Qorma" },
  { id: 5, name: "Water" },
  { id: 6, name: "Chicken Broast" },
  { id: 7, name: "Tea" },
];
const menuItems5 = [
  { id: 1, name: "Water" },
  { id: 2, name: "Chicken Biryani" },
  { id: 3, name: "Garlic Naan" },
  { id: 4, name: "Salad" },
  { id: 5, name: "Chicken Qorma" },
  { id: 6, name: "Chicken Broast" },
  { id: 7, name: "Tea" },
];
const menuItems6 = [
  { id: 1, name: "Chicken Broast" },
  { id: 2, name: "Chicken Biryani" },
  { id: 3, name: "Garlic Naan" },
  { id: 4, name: "Salad" },
  { id: 5, name: "Water" },
  { id: 6, name: "Chicken Qorma" },
  { id: 7, name: "Tea" },
];
const menuItems7 = [
  { id: 1, name: "Tea" },
  { id: 2, name: "Chicken Biryani" },
  { id: 3, name: "Garlic Naan" },
  { id: 4, name: "Salad" },
  { id: 5, name: "Water" },
  { id: 6, name: "Chicken Qorma" },
  { id: 7, name: "Chicken Broast" },
];
const columns = [
  {
    header: (
      <div className="flex items-center gap-3">
        <Checkboxs />
        Item Name
      </div>
    ),
    accessor: "items",
  },
  { header: "Guests", accessor: "guests" },
  { header: "Rates", accessor: "rates" },
  { header: "Amount", accessor: "amount" },
  { header: "Remarks", accessor: "remarks" },
  { header: "", accessor: "action" },
];
const data = [
  {
    items: (
      <div className="flex items-center gap-3">
        <Checkboxs />
        <TableSelect tableOptions={menuItems1} className="min-w-[140px]" />
      </div>
    ),
    guests: "270",
    rates: "500",
    amount: "10,000",
    remarks: "Added on the client requirements",
    action: (
      <div className="flex items-center justify-center gap-5">
        <Plus className="cursor-pointer" />
        <Trash className="cursor-pointer" />
        <Edit className="cursor-pointer" />
      </div>
    ),
  },
  {
    items: (
      <div className="flex items-center gap-3">
        <Checkboxs />
        <TableSelect tableOptions={menuItems2} className="min-w-[140px]" />
      </div>
    ),
    guests: "270",
    rates: "370",
    amount: "20,000",
    remarks: "Added on the client requirements",
    action: (
      <div className="flex items-center justify-center gap-5">
        <Plus className="cursor-pointer" />
        <Trash className="cursor-pointer" />
        <Edit className="cursor-pointer" />
      </div>
    ),
  },
  {
    items: (
      <div className="flex items-center gap-3">
        <Checkboxs />
        <TableSelect tableOptions={menuItems3} className="min-w-[140px]" />
      </div>
    ),
    guests: "270",
    rates: "500",
    amount: "8,000",
    remarks: "Added on the client requirements",
    action: (
      <div className="flex items-center justify-center gap-5">
        <Plus className="cursor-pointer" />
        <Trash className="cursor-pointer" />
        <Edit className="cursor-pointer" />
      </div>
    ),
  },
  {
    items: (
      <div className="flex items-center gap-3">
        <Checkboxs />
        <TableSelect tableOptions={menuItems4} className="min-w-[140px]" />
      </div>
    ),
    guests: "270",
    rates: "270",
    amount: "5,000",
    remarks: "Added on the client requirements",
    action: (
      <div className="flex items-center justify-center gap-5">
        <Plus className="cursor-pointer" />
        <Trash className="cursor-pointer" />
        <Edit className="cursor-pointer" />
      </div>
    ),
  },
  {
    items: (
      <div className="flex items-center gap-3">
        <Checkboxs />
        <TableSelect tableOptions={menuItems5} className="min-w-[140px]" />
      </div>
    ),
    guests: "270",
    rates: "500",
    amount: "6,000",
    remarks: "Added on the client requirements",
    action: (
      <div className="flex items-center justify-center gap-5">
        <Plus className="cursor-pointer" />
        <Trash className="cursor-pointer" />
        <Edit className="cursor-pointer" />
      </div>
    ),
  },
  {
    items: (
      <div className="flex items-center gap-3">
        <Checkboxs />
        <TableSelect tableOptions={menuItems6} className="min-w-[140px]" />
      </div>
    ),
    guests: "270",
    rates: "270",
    amount: "15,000",
    remarks: "Added on the client requirements",
    action: (
      <div className="flex items-center justify-center gap-5">
        <Plus className="cursor-pointer" />
        <Trash className="cursor-pointer" />
        <Edit className="cursor-pointer" />
      </div>
    ),
  },
  {
    items: (
      <div className="flex items-center gap-3">
        <Checkboxs />
        <TableSelect tableOptions={menuItems7} className="min-w-[140px]" />
      </div>
    ),
    guests: "270",
    rates: "70",
    amount: "6,000",
    remarks: "Added on the client requirements",
    action: (
      <div className="flex items-center justify-center gap-5">
        <Plus className="cursor-pointer" />
        <Trash className="cursor-pointer" />
        <Edit className="cursor-pointer" />
      </div>
    ),
  },
];

const FoodPackages = () => {
  return (
    <div className="pt-[30px]">
      <div className="pl-[22px] ">
        <p className="font-poppins font-medium pb-2.5">Food Package</p>
        <Select options={eventGuest} className="max-w-[270px]" />
      </div>
      <div className="mt-7">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

export default FoodPackages;
