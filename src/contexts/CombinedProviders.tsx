import React from "react";
import { providers } from "./index";
import * as models from "../models";

type CombinedProviderType = React.FC<models.ProviderProps>;

export const combineProviders = (
  ...providers: CombinedProviderType[]
): CombinedProviderType => {
  const reducer = (
    CollectedProvider: CombinedProviderType,
    CurrentProvider: CombinedProviderType
  ): CombinedProviderType => {
    return (props) => {
      return (
        <CollectedProvider>
          <CurrentProvider {...props} />
        </CollectedProvider>
      );
    };
  };

  const combinedProvider = providers.reduce(reducer, (props) => (
    <>{props.children}</>
  ));

  return combinedProvider;
};

export const CombinedProviders = combineProviders(...providers);
