import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleClass from './singleClass';

const Classes = () => {
    const classes = useLoaderData()
    console.log(classes);
    return (
        <div className='bg-base-200'>

            <Tabs className="text-center max-w-3xl mx-auto bg-base-200 p-10">
                <h2 className='text-4xl text-center font-bold my-3'>Weekly schedule</h2>
                <TabList>
                    <Tab>Monday</Tab>
                    <Tab>Tuesday</Tab>
                    <Tab>Wednesday</Tab>
                    <Tab>Thursday</Tab>
                    <Tab>Friday</Tab>
                    <Tab>Saturday</Tab>
                    <Tab>Sunday</Tab>
                </TabList>

                <TabPanel className='bg-blue-gray-500 text-white'>
                    <h2>Class 1</h2>
                    <h2>Class 3</h2>
                    <h2>Class 4</h2>
                    <h2>Class 6</h2>
                </TabPanel>
                <TabPanel className='bg-blue-gray-500  text-white'>
                    <h2>Class 2</h2>
                    <h2>Class 4</h2>
                    <h2>Class 5</h2>
                    <h2>Class 6</h2>
                </TabPanel>
                <TabPanel className='bg-blue-gray-500  text-white'>
                    <h2>Class 2</h2>
                    <h2>Class 3</h2>
                    <h2>Class 4</h2>
                    <h2>Class 5</h2>
                </TabPanel>
                <TabPanel className='bg-blue-gray-500  text-white'>
                    <h2>Class 1</h2>
                    <h2>Class 2</h2>
                    <h2>Class 3</h2>
                    <h2>Class 4</h2>
                </TabPanel>
                <TabPanel className='bg-blue-gray-500  text-white'>
                    <h2>Class 1</h2>
                    <h2>Class 4</h2>
                    <h2>Class 5</h2>
                    <h2>Class 6</h2>
                </TabPanel>
                <TabPanel className='bg-blue-gray-500  text-white'>
                    <h2>Class 3</h2>
                    <h2>Class 4</h2>
                    <h2>Class 5</h2>
                    <h2>Class 6</h2>
                </TabPanel>
                <TabPanel className='bg-blue-gray-500  text-white'>
                    <h2>Class 1</h2>
                    <h2>Class 2</h2>
                    <h2>Class 3</h2>
                    <h2>Class 5</h2>
                </TabPanel>

            </Tabs>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        classes?.map((singleClass, i) => <SingleClass key={i} singleClass={singleClass}></SingleClass>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;