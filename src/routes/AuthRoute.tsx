/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom"
import { userStore } from "../lib/stores/userStore"

interface IProps extends RouteProps {
  // @ts-ignore
  component: React.ComponentType<RouteComponentProps<any>>
}

export const AuthRoute: React.FC<IProps> = ({
  component: Component,
  ...rest
}) => {
  const storage = JSON.parse(localStorage.getItem("user-storage")!!)
  const current = userStore((state) => state.current)
  return (
    <Route
      {...rest}
      // @ts-ignore
      render={(props) =>
        current || storage?.state?.current ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}
