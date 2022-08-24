import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-08-17T00:00:00.000Z",
      "2022-08-18T00:00:00.000Z",
      "2022-08-19T00:00:00.000Z",
      "2022-08-20T00:00:00.000Z",
      "2022-08-21T00:00:00.000Z",
      "2022-08-22T00:00:00.000Z",
      "2022-08-23T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 51, 109, 120] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box p={["4", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="large" mb="4">
              Subscribe of week
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box p={["4", "8"]} bg="gray.800" borderRadius={8}>
            <Text fontSize="large" mb="4">
              Open rate
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
