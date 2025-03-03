import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CreditCard, PlusCircle, Calendar, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// Mock data for billing history
const billingHistory = [
  {
    id: 1,
    date: "2023-10-01",
    description: "Monthly Subscription",
    amount: "$49.99",
    status: "Paid",
    invoiceId: "INV-001",
  },
  {
    id: 2,
    date: "2023-09-01",
    description: "Monthly Subscription",
    amount: "$49.99",
    status: "Paid",
    invoiceId: "INV-002",
  },
  {
    id: 3,
    date: "2023-08-01",
    description: "Monthly Subscription",
    amount: "$49.99",
    status: "Paid",
    invoiceId: "INV-003",
  },
];

// Mock data for payment methods
const paymentMethods = [
  {
    id: 1,
    type: "Visa",
    last4: "1234",
    expiry: "12/25",
  },
  {
    id: 2,
    type: "MasterCard",
    last4: "5678",
    expiry: "06/24",
  },
];

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <h1 className="page-title">Billing</h1>
        <p className="page-description">
          Manage your billing history, payment methods, and upcoming payments.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$49.99</div>
            <p className="text-xs text-muted-foreground">
              Due on November 1, 2023
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$149.97</div>
            <p className="text-xs text-muted-foreground">
              Last 3 months
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Visa, MasterCard
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>
            View and download invoices for your past payments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {billingHistory.map((bill) => (
              <Card key={bill.id} className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{bill.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {bill.date} - {bill.amount}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${bill.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                        }`}
                    >
                      {bill.status}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/billing/invoices/${bill.invoiceId}`}>
                        <Download className="mr-2 h-4 w-4" />
                        Download Invoice
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>
            Manage your saved payment methods.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethods.map((method) => (
            <Card key={method.id} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    {method.type} ending in {method.last4}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Expires {method.expiry}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </Card>
          ))}
          <Button asChild className="w-full">
            <Link href="/billing/add-payment-method" className="flex items-center">
              <PlusCircle className="mr-2 h-5 w-5" />
              Add New Payment Method
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}