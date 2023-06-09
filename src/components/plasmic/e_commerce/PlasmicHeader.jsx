// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2GyyV1uN4xbnqKtJ7pjrQU
// Component: Qc-AaHBNiJ4q-
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
import LinkButton from "../../LinkButton"; // plasmic-import: epUi-KTwCwraW0/component
import { useScreenVariants as useScreenVariantscf27W7HxUbhqT } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -CF27w7hxUbhqT/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_e_commerce.module.css"; // plasmic-import: 2GyyV1uN4xbnqKtJ7pjrQU/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: Qc-AaHBNiJ4q-/css
import PersonCirclesvgIcon from "./icons/PlasmicIcon__PersonCirclesvg"; // plasmic-import: WbN2i0RCJ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: hmD8pNWAqIyF8L/icon

export const PlasmicHeader__VariantProps = new Array("expanded");

export const PlasmicHeader__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHeader__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscf27W7HxUbhqT()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        { [sty.rootexpanded]: hasVariant($state, "expanded", "expanded") }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__anjgA)}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton, {
              [sty.menuButtonexpanded]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            })}
            expanded={
              hasVariant($state, "expanded", "expanded") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? true
                : undefined
            }
          />
        ) : null}
        {true ? (
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__tsBJj
            )}
            href={`/profilo`}
          >
            <PersonCirclesvgIcon
              className={classNames(projectcss.all, sty.svg__wdiSc)}
              role={"img"}
            />
          </a>
        ) : null}
        {(
          hasVariant($state, "expanded", "expanded") &&
          hasVariant(globalVariants, "screen", "mobile")
            ? true
            : hasVariant(globalVariants, "screen", "mobile")
            ? true
            : true
        ) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__l9Vk3, {
              [sty.freeBoxexpanded__l9Vk3Km7Ym]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            })}
          >
            <a
              data-plasmic-name={"home"}
              data-plasmic-override={overrides.home}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.home
              )}
              href={`/`}
            >
              {"Home"}
            </a>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___4Mkvj
              )}
              href={`/GestioneOrdini`}
            >
              {"Gestione Ordini"}
            </a>
            <a
              data-plasmic-name={"catalogo"}
              data-plasmic-override={overrides.catalogo}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.catalogo
              )}
              href={"/catalogo"}
              target={undefined}
            >
              {"Catalogo"}
            </a>
          </p.Stack>
        ) : null}
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lOvlk)}
        >
          <IconLink
            data-plasmic-name={"iconLink"}
            data-plasmic-override={overrides.iconLink}
            className={classNames("__wab_instance", sty.iconLink)}
            icon={
              <React.Fragment>
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__rhRif)}
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
      {(
        hasVariant($state, "expanded", "expanded") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : true
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__mAhyx, {
            [sty.freeBoxexpanded__mAhyXkm7Ym]: hasVariant(
              $state,
              "expanded",
              "expanded"
            )
          })}
        >
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__tZbZt)}
            text={"Home"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__iJ18K)}
            text={"New Arrival"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__jW3Er)}
            text={"Features"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__gwCtE)}
            text={"Blog"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton___4PveK)}
            text={"Contact"}
            type={"blankGray"}
          />
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "home", "catalogo", "iconLink", "text"],
  menuButton: ["menuButton"],
  home: ["home"],
  catalogo: ["catalogo"],
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    home: makeNodeComponent("home"),
    catalogo: makeNodeComponent("catalogo"),
    iconLink: makeNodeComponent("iconLink"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
