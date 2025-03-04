"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreVertical } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  image: string;
}

const roles = ["All", "Patient", "Doctor", "Admin", "Organization Admin", "Staff"];
const usersData: IUser[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Doctor", createdAt: "2024-02-01", image: "" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Patient", createdAt: "2024-01-15", image: "" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Admin", createdAt: "2024-01-10", image: "" },
  { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Doctor", createdAt: "2023-12-20", image: "" },
  { id: 5, name: "Charlie White", email: "charlie@example.com", role: "Staff", createdAt: "2023-11-05", image: "" },
  { id: 6, name: "Daisy Green", email: "daisy@example.com", role: "Patient", createdAt: "2023-10-28", image: "" },
  { id: 7, name: "Ethan Black", email: "ethan@example.com", role: "Organization Admin", createdAt: "2023-09-12", image: "" },
  { id: 8, name: "Fiona Blue", email: "fiona@example.com", role: "Doctor", createdAt: "2023-08-21", image: "" },
  { id: 9, name: "George Red", email: "george@example.com", role: "Patient", createdAt: "2023-07-15", image: "" },
  { id: 10, name: "Hannah Yellow", email: "hannah@example.com", role: "Admin", createdAt: "2023-06-30", image: "" },
  { id: 11, name: "Isaac Brown", email: "isaac@example.com", role: "Doctor", createdAt: "2023-05-12", image: "" },
  { id: 12, name: "Jessica Green", email: "jessica@example.com", role: "Staff", createdAt: "2023-04-28", image: "" },
  { id: 13, name: "Kevin White", email: "kevin@example.com", role: "Patient", createdAt: "2023-03-19", image: "" },
  { id: 14, name: "Lily Pink", email: "lily@example.com", role: "Organization Admin", createdAt: "2023-02-10", image: "" },
  { id: 15, name: "Michael Grey", email: "michael@example.com", role: "Doctor", createdAt: "2023-01-05", image: "" },
  { id: 16, name: "Nancy Orange", email: "nancy@example.com", role: "Staff", createdAt: "2022-12-15", image: "" },
  { id: 17, name: "Oscar Purple", email: "oscar@example.com", role: "Patient", createdAt: "2022-11-01", image: "" },
  { id: 18, name: "Isaac Brown", email: "isaac@example.com", role: "Doctor", createdAt: "2023-05-12", image: "" },
  { id: 19, name: "Jessica Green", email: "jessica@example.com", role: "Staff", createdAt: "2023-04-28", image: "" },
  { id: 20, name: "Kevin White", email: "kevin@example.com", role: "Patient", createdAt: "2023-03-19", image: "" },
  { id: 21, name: "Lily Pink", email: "lily@example.com", role: "Organization Admin", createdAt: "2023-02-10", image: "" },
  { id: 22, name: "Michael Grey", email: "michael@example.com", role: "Doctor", createdAt: "2023-01-05", image: "" },
  { id: 23, name: "Nancy Orange", email: "nancy@example.com", role: "Staff", createdAt: "2022-12-15", image: "" },
  { id: 24, name: "Oscar Purple", email: "oscar@example.com", role: "Patient", createdAt: "2022-11-01", image: "" },

];

export default function AvailableUsersPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedUser, setSelectedUser] = useState<null | IUser>(null);
  const [updatedRole, setUpdatedRole] = useState("");
  const [confirmDelete, setConfirmDelete] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Debounce Effect for Search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  // Filtered Users based on Role & Search
  const filteredUsers = usersData.filter(
    (user) =>
      (selectedRole === "All" || user.role === selectedRole) &&
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // Paginated Users
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const handleEdit = (user: IUser) => {
    setSelectedUser(user);
    setUpdatedRole(user.role);
  };

  const handleUpdate = () => {
    console.log("Updating user:", selectedUser?.id, "to role:", updatedRole);
    setSelectedUser(null);
  };

  const handleDelete = () => {
    if (confirmDelete === selectedUser?.name) {
      console.log("Deleting user:", selectedUser.id);
      setSelectedUser(null);
    }
  };

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-xl font-bold">Available Users</h1>

      {/* Search Input */}
      <Input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md"
      />

      {/* Role Selection Chips */}
      <div className="flex gap-2 flex-wrap">
        {roles.map((role) => (
          <Badge
            key={role}
            variant={selectedRole === role ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedRole(role)}
          >
            {role}
          </Badge>
        ))}
      </div>

      {/* Users List */}
      <div className="h-[38rem] overflow-y-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 overflow-y-auto">
          {paginatedUsers.map((user) => (
            <Card key={user.id} className="relative p-2 h-[9rem]">
              <div className="absolute top-2 right-2 cursor-pointer" onClick={() => handleEdit(user)}>
                <MoreVertical />
              </div>
              <CardHeader className="flex items-left space-x-4">
                <div className="flex gap-4 items-start">
                  {user.image ? (
                    <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full" />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-300 rounded-full text-lg font-bold">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <CardTitle>{user.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="text-sm text-muted-foreground">Role: {user.role}</p>
                    <p className="text-xs text-muted-foreground">Joined: {user.createdAt}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-2">
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
          Previous
        </Button>
        <span className="font-bold text-lg">{currentPage}</span>
        <Button
          disabled={startIndex + itemsPerPage >= filteredUsers.length}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>

      {/* Edit User Modal */}
      {selectedUser && (
        <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit User: {selectedUser.name}</DialogTitle>
            </DialogHeader>
            <Select value={updatedRole} onValueChange={setUpdatedRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {roles.slice(1).map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={handleUpdate} className="mt-4">
              Update
            </Button>
            <div className="mt-6 border-t pt-4 text-red-600">
              <h3 className="font-bold">Danger Zone</h3>
              <p>Type the username to confirm deletion:</p>
              <Input
                placeholder={selectedUser.name}
                value={confirmDelete}
                onChange={(e) => setConfirmDelete(e.target.value)}
                className="mt-2"
              />
              <Button onClick={handleDelete} className="mt-2" variant="destructive">
                Delete User
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
