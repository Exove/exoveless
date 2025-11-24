import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Composable table primitives with subtle borders that work on dark backgrounds.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Quarterly metrics</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Quarter</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Growth</TableHead>
          <TableHead>Churn</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          ["Q1", "€1.2M", "12%", "4.5%"],
          ["Q2", "€1.4M", "16%", "4.0%"],
          ["Q3", "€1.6M", "18%", "3.6%"],
          ["Q4", "€1.9M", "22%", "3.2%"],
        ].map(([quarter, revenue, growth, churn]) => (
          <TableRow key={quarter}>
            <TableCell>{quarter}</TableCell>
            <TableCell>{revenue}</TableCell>
            <TableCell>{growth}</TableCell>
            <TableCell>{churn}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

