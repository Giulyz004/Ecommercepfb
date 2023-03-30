// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2GyyV1uN4xbnqKtJ7pjrQU
// Component: ymsmsqowiD_hX8
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuButton from "../../MenuButton"; // plasmic-import: Qab3DN1TM8pM2X/component
import IconLink from "../../IconLink"; // plasmic-import: mdlB7opZfCK7nb/component
import { useScreenVariants as useScreenVariantscf27W7HxUbhqT } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -CF27w7hxUbhqT/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_e_commerce.module.css"; // plasmic-import: 2GyyV1uN4xbnqKtJ7pjrQU/projectcss
import sty from "./PlasmicHeader2.module.css"; // plasmic-import: ymsmsqowiD_hX8/css
import PersonCirclesvgIcon from "./icons/PlasmicIcon__PersonCirclesvg"; // plasmic-import: WbN2i0RCJ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hmD8pNWAqIyF8L/icon

export const PlasmicHeader2__VariantProps = new Array();

export const PlasmicHeader2__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHeader2__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscf27W7HxUbhqT()
  });
  return true ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <MenuButton
          data-plasmic-name={"menuButton"}
          data-plasmic-override={overrides.menuButton}
          className={classNames("__wab_instance", sty.menuButton)}
        />
      ) : null}
      {true ? (
        <a
          className={classNames(projectcss.all, projectcss.a, sty.link__fSx36)}
          href={`/profilo`}
        >
          <PersonCirclesvgIcon
            className={classNames(projectcss.all, sty.svg__iaptF)}
            role={"img"}
          />
        </a>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__y6ImL)}
        >
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___4QSB
            )}
            href={`/home`}
          >
            {"Home"}
          </a>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__xtOpW
            )}
            href={`/GestioneOrdini`}
          >
            {"Gestione Ordini"}
          </a>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___5Ssw4
            )}
            href={`/catalogo`}
          >
            {hasVariant(globalVariants, "screen", "mobile")
              ? "Catalogo"
              : "Catalogo"}
          </a>
        </p.Stack>
      ) : null}
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__gBtB3)}
      >
        <IconLink
          data-plasmic-name={"iconLink"}
          data-plasmic-override={overrides.iconLink}
          className={classNames("__wab_instance", sty.iconLink)}
          icon={
            <React.Fragment>
              <IconIcon
                className={classNames(projectcss.all, sty.svg__gyzGj)}
                role={"img"}
              />

              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"0"}
              </div>
            </React.Fragment>
          }
        />
      </p.Stack>
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "iconLink", "text"],
  menuButton: ["menuButton"],
  iconLink: ["iconLink", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader2__ArgProps,
          internalVariantPropNames: PlasmicHeader2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader2";
  } else {
    func.displayName = `PlasmicHeader2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader2 = Object.assign(
  // Top-level PlasmicHeader2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    iconLink: makeNodeComponent("iconLink"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHeader2
    internalVariantProps: PlasmicHeader2__VariantProps,
    internalArgProps: PlasmicHeader2__ArgProps
  }
);

export default PlasmicHeader2;
/* prettier-ignore-end */
