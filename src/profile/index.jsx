import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MyListing from "./components/MyListing";
function Profile() {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-20">
        <Tabs defaultValue="my-account" className="w-full">
          <TabsList className='w-full flex justify-start'>
            <TabsTrigger value="my-account">My Account</TabsTrigger>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="my-account"> 
          <MyListing />
          </TabsContent>
          <TabsContent value="inbox">Inbox</TabsContent>
          <TabsContent value="profile">Profile</TabsContent>
        </Tabs>

     
      </div>
    </div>
  );
}

export default Profile;
