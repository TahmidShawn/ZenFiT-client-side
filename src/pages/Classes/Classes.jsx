import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Classes = () => {
    return (
        <div className='bg-base-200'>

            <Tabs className="text-center max-w-3xl mx-auto bg-base-200 p-10">
                <h2 className='text-4xl text-center font-bold my-3'>Weekly schedule</h2>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                    <Tab>Title 4</Tab>
                    <Tab>Title 5</Tab>
                    <Tab>Title 6</Tab>
                    <Tab>Title 7</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 6</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 7</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Classes;