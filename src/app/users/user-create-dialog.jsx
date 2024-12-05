import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const UserCreateDialog = ({ open, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const sendForm = async () => {
    const res = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({
        firstName: "Nandir",
        lastName: "Lighten",
        email: "alighten0@go.com",
        imageUrl: "https://dummyimage.com/117x116.png/cc0000/ffffff",
      }),
    });
    onClose(false);
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">First Name</Label>
            <Input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              id="firstName"
              placeholder="First Name..."
              value={firstName}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Last Name</Label>
            <Input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              id="username"
              placeholder="Last Name..."
              value={lastName}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="username"
              placeholder="Email"
              value={email}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => onClose(false)}
            variant="outline"
            type="button"
          >
            Cancel
          </Button>
          <Button type="submit" onClick={() => sendForm()}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
