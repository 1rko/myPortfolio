import styled from "styled-components";
import {TabItem, TabsItemPropsType,} from "./TabItem"
import {StatusType} from "./Works";

type TabsPropsType = {
    tabsItems: Array<TabsItemPropsType>,
    tabClick: (status: StatusType) => void
}
export const Tabs = ({tabsItems, tabClick}: TabsPropsType) => {

    return (
        <S_Tabs>
            <ul>
                {tabsItems.map(item =>
                    <TabItem key={item.id} id={item.id} title={item.title} tabClick={tabClick}/>
                )
                }
            </ul>
        </S_Tabs>
    );
};

const S_Tabs = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px;

  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
  }
`