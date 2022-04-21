import React, { createContext, useState } from "react";
export const BaseContext = createContext();
export const BaseContextProvider = (props) => {
  const [user, setUser] = useState(["admin"]);
  const [mobilenm, setMobilenm] = useState("");
  const [devotename, setDevoteName] = useState("");
  const [password, setPassWord] = useState("");
  
  return (
    <BaseContext.Provider
      value={{
        mobilenm,
        setMobilenm,
        devotename,
        setDevoteName,
        password,
        setPassWord
      }}
    >
      {props.children}
    </BaseContext.Provider>
  );
};
