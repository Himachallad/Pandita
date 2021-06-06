import { SwipeableDrawer } from "@material-ui/core";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { sideNavKeys, sideNavMap } from "../../../../config/sideNavMap";
import { isIos } from "../../../../utils/deviceCheck";
import * as css from "../../../../../styles/test.module.scss";
interface SideNavItemProps {
  name: string;
}

interface SideNavProps {
  openit: boolean;
}

const SideNavBar = ({ openit }: SideNavProps, ref): JSX.Element => {
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    setOpenSideBar(openit);
  }, [openit]);

  useImperativeHandle(ref, () => ({
    openSideBar: (val: boolean) => {
      setOpenSideBar(val);
    },
  }));

  const CustomSideNavList = () => {
    let ret: Array<JSX.Element> = [];
    sideNavKeys.forEach((val: string) => {
      const item: SideNavItemProps = sideNavMap[val];
      ret.push(
        <div
          className={css.navBlock}
          key={item.name}
          onClick={() => {
            setOpenSideBar(false);
          }}
        >
          {item.name}
        </div>
      );
    });

    return <>{ret}</>;
  };
  return (
    <SwipeableDrawer
      onClose={() => {}}
      onOpen={() => {}}
      open={openSideBar}
      variant="persistent"
      disableBackdropTransition={!isIos}
      disableDiscovery={isIos}
    >
      <CustomSideNavList />
    </SwipeableDrawer>
  );
};

export default forwardRef(SideNavBar);
