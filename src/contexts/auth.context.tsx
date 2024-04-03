import { useProfile } from "@/hooks/auth/useProfile";
import { GhProfileOutput } from "@/types/generated";
import { getAuth } from "@/utils/auth";
import { isEmpty } from "lodash";
import { redirect, usePathname } from "next/navigation";
import { createContext, useEffect, useReducer } from "react";
import jwtDecode from "jwt-decode";
import { routerAuth } from "@/utils/common";

export const AuthContext = createContext(null);
export const AuthDispatchContext = createContext({});

type Props = {
  children: React.ReactNode;
};

export type AuthContextValue = GhProfileOutput & {
  router: Array<string>;
};

export const AuthProvider = ({ children }: Props) => {
  const pathname = usePathname();
  const token = getAuth() as string;
  const decodeUser: any = token ? jwtDecode(token) : "";

  const { user: profile } = useProfile();

  const [user, dispatch] = useReducer(authReducer, {
    id: decodeUser?.sub,
    email: decodeUser?.email,
    metaData: decodeUser?.user_metadata,
    router: routerAuth(decodeUser?.user_metadata?.role)
  });

  useEffect(() => {
    if (!user.email && pathname !== "/login" && !token) {
      redirect("/login");
    }
  }, [pathname, user, token]);

  useEffect(() => {
    if (!isEmpty(profile)) {
      dispatch({
        type: "changeAuth",
        value: {
          id: profile?.id,
          email: profile?.email,
          metaData: profile?.metaData,
          router: routerAuth(profile?.metaData?.role)
        }
      });
    }
  }, [profile]);

  return (
    <AuthContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

function authReducer(user: any, action: any) {
  switch (action.type) {
    case "changeAuth": {
      return action.value;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
