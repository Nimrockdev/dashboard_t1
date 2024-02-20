import {
  Callout,
  Card,
  Text,
  Flex,
  CategoryBar,
  Grid,
  Icon,
  Title,
  Bold,
  ProgressBar,
  List,
  ListItem,
  BarList,
  LineChart,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

import {
  ChevronDoubleRightIcon,
  ExclamationIcon,
  MoonIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const dataCardDataBarsFlex = [
  {
    name: "Twitter",
    value: 456,
    href: "https://twitter.com/tremorlabs",
    icon: function TwitterIcon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2.5 fill-blue-500"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
        </svg>
      );
    },
  },
  {
    name: "Google",
    value: 351,
    href: "https://google.com",
    icon: function GoogleIcon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2.5 fill-slate-500"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z" />
        </svg>
      );
    },
  },
  {
    name: "GitHub",
    value: 271,
    href: "https://github.com/tremorlabs/tremor",
    icon: function GitHubIcon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2.5 fill-slate-900"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
        </svg>
      );
    },
  },
  {
    name: "Reddit",
    value: 191,
    href: "https://reddit.com",
    icon: function RedditIcon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2.5 fill-orange-500"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm6.67-10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L13 6.65l2.14.45a1 1 0 1 0 .13-.61L12.82 6a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33zm-10 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 12 16a3.28 3.28 0 0 0 2.09-.61.28.28 0 1 1 .39.4v-.04zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04l.01-.04z" />
        </svg>
      );
    },
  },
  {
    name: "Youtube",
    value: 91,
    href: "https://www.youtube.com/@tremorlabs3079",
    icon: function YouTubeIcon() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2.5 fill-red-500"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
        </svg>
      );
    },
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const dataCardDataBarsFlex2 = [
  {
    date: "Aug 01",
    "ETF Shares Vital": 2100.2,
    "Vitainvest Core": 4434.1,
    "iShares Tech Growth": 7943.2,
  },
  {
    date: "Aug 02",
    "ETF Shares Vital": 2943.0,
    "Vitainvest Core": 4954.1,
    "iShares Tech Growth": 8954.1,
  },
  {
    date: "Aug 03",
    "ETF Shares Vital": 4889.5,
    "Vitainvest Core": 6100.2,
    "iShares Tech Growth": 9123.7,
  },
  {
    date: "Aug 04",
    "ETF Shares Vital": 3909.8,
    "Vitainvest Core": 4909.7,
    "iShares Tech Growth": 7478.4,
  },
  {
    date: "Aug 05",
    "ETF Shares Vital": 5778.7,
    "Vitainvest Core": 7103.1,
    "iShares Tech Growth": 9504.3,
  },
  {
    date: "Aug 06",
    "ETF Shares Vital": 5900.9,
    "Vitainvest Core": 7534.3,
    "iShares Tech Growth": 9943.4,
  },
  {
    date: "Aug 07",
    "ETF Shares Vital": 4129.4,
    "Vitainvest Core": 7412.1,
    "iShares Tech Growth": 10112.2,
  },
  {
    date: "Aug 08",
    "ETF Shares Vital": 6021.2,
    "Vitainvest Core": 7834.4,
    "iShares Tech Growth": 10290.2,
  },
  {
    date: "Aug 09",
    "ETF Shares Vital": 6279.8,
    "Vitainvest Core": 8159.1,
    "iShares Tech Growth": 10349.6,
  },
  {
    date: "Aug 10",
    "ETF Shares Vital": 6224.5,
    "Vitainvest Core": 8260.6,
    "iShares Tech Growth": 10415.4,
  },
  {
    date: "Aug 11",
    "ETF Shares Vital": 6380.6,
    "Vitainvest Core": 8965.3,
    "iShares Tech Growth": 10636.3,
  },
  {
    date: "Aug 12",
    "ETF Shares Vital": 6414.4,
    "Vitainvest Core": 7989.3,
    "iShares Tech Growth": 10900.5,
  },
  {
    date: "Aug 13",
    "ETF Shares Vital": 6540.1,
    "Vitainvest Core": 7839.6,
    "iShares Tech Growth": 11040.4,
  },
  {
    date: "Aug 14",
    "ETF Shares Vital": 6634.4,
    "Vitainvest Core": 7343.8,
    "iShares Tech Growth": 11390.5,
  },
  {
    date: "Aug 15",
    "ETF Shares Vital": 7124.6,
    "Vitainvest Core": 6903.7,
    "iShares Tech Growth": 11423.1,
  },
  {
    date: "Aug 16",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 6273.6,
    "iShares Tech Growth": 12134.4,
  },
  {
    date: "Aug 17",
    "ETF Shares Vital": 10287.8,
    "Vitainvest Core": 5900.3,
    "iShares Tech Growth": 12034.4,
  },
  {
    date: "Aug 18",
    "ETF Shares Vital": 10323.2,
    "Vitainvest Core": 5732.1,
    "iShares Tech Growth": 11011.7,
  },
  {
    date: "Aug 19",
    "ETF Shares Vital": 10511.4,
    "Vitainvest Core": 5523.1,
    "iShares Tech Growth": 11834.8,
  },
  {
    date: "Aug 20",
    "ETF Shares Vital": 11043.9,
    "Vitainvest Core": 5422.3,
    "iShares Tech Growth": 12387.1,
  },
  {
    date: "Aug 21",
    "ETF Shares Vital": 6700.7,
    "Vitainvest Core": 5334.2,
    "iShares Tech Growth": 11032.2,
  },
  {
    date: "Aug 22",
    "ETF Shares Vital": 6900.8,
    "Vitainvest Core": 4943.4,
    "iShares Tech Growth": 10134.2,
  },
  {
    date: "Aug 23",
    "ETF Shares Vital": 7934.5,
    "Vitainvest Core": 4812.1,
    "iShares Tech Growth": 9921.2,
  },
  {
    date: "Aug 24",
    "ETF Shares Vital": 9021.0,
    "Vitainvest Core": 2729.1,
    "iShares Tech Growth": 10549.8,
  },
  {
    date: "Aug 25",
    "ETF Shares Vital": 9198.2,
    "Vitainvest Core": 2178.0,
    "iShares Tech Growth": 10968.4,
  },
  {
    date: "Aug 26",
    "ETF Shares Vital": 9557.1,
    "Vitainvest Core": 2158.3,
    "iShares Tech Growth": 11059.1,
  },
  {
    date: "Aug 27",
    "ETF Shares Vital": 9959.8,
    "Vitainvest Core": 2100.8,
    "iShares Tech Growth": 11903.6,
  },
  {
    date: "Aug 28",
    "ETF Shares Vital": 10034.6,
    "Vitainvest Core": 2934.4,
    "iShares Tech Growth": 12143.3,
  },
  {
    date: "Aug 29",
    "ETF Shares Vital": 10243.8,
    "Vitainvest Core": 3223.4,
    "iShares Tech Growth": 12930.1,
  },
  {
    date: "Aug 30",
    "ETF Shares Vital": 10078.5,
    "Vitainvest Core": 3779.1,
    "iShares Tech Growth": 13420.5,
  },
  {
    date: "Aug 31",
    "ETF Shares Vital": 11134.6,
    "Vitainvest Core": 4190.3,
    "iShares Tech Growth": 14443.2,
  },
  {
    date: "Sep 01",
    "ETF Shares Vital": 12347.2,
    "Vitainvest Core": 4839.1,
    "iShares Tech Growth": 14532.1,
  },
  {
    date: "Sep 02",
    "ETF Shares Vital": 12593.8,
    "Vitainvest Core": 5153.3,
    "iShares Tech Growth": 14283.5,
  },
  {
    date: "Sep 03",
    "ETF Shares Vital": 12043.4,
    "Vitainvest Core": 5234.8,
    "iShares Tech Growth": 14078.9,
  },
  {
    date: "Sep 04",
    "ETF Shares Vital": 12144.9,
    "Vitainvest Core": 5478.4,
    "iShares Tech Growth": 13859.7,
  },
  {
    date: "Sep 05",
    "ETF Shares Vital": 12489.5,
    "Vitainvest Core": 5741.1,
    "iShares Tech Growth": 13539.2,
  },
  {
    date: "Sep 06",
    "ETF Shares Vital": 12748.7,
    "Vitainvest Core": 6743.9,
    "iShares Tech Growth": 13643.2,
  },
  {
    date: "Sep 07",
    "ETF Shares Vital": 12933.2,
    "Vitainvest Core": 7832.8,
    "iShares Tech Growth": 14629.2,
  },
  {
    date: "Sep 08",
    "ETF Shares Vital": 13028.8,
    "Vitainvest Core": 8943.2,
    "iShares Tech Growth": 13611.2,
  },
  {
    date: "Sep 09",
    "ETF Shares Vital": 13412.4,
    "Vitainvest Core": 9932.2,
    "iShares Tech Growth": 12515.2,
  },
  {
    date: "Sep 10",
    "ETF Shares Vital": 13649.0,
    "Vitainvest Core": 10139.2,
    "iShares Tech Growth": 11143.8,
  },
  {
    date: "Sep 11",
    "ETF Shares Vital": 13748.5,
    "Vitainvest Core": 10441.2,
    "iShares Tech Growth": 8929.2,
  },
  {
    date: "Sep 12",
    "ETF Shares Vital": 13148.1,
    "Vitainvest Core": 10933.8,
    "iShares Tech Growth": 8943.2,
  },
  {
    date: "Sep 13",
    "ETF Shares Vital": 12839.6,
    "Vitainvest Core": 11073.4,
    "iShares Tech Growth": 7938.3,
  },
  {
    date: "Sep 14",
    "ETF Shares Vital": 12428.2,
    "Vitainvest Core": 11128.3,
    "iShares Tech Growth": 7533.4,
  },
  {
    date: "Sep 15",
    "ETF Shares Vital": 12012.8,
    "Vitainvest Core": 11412.3,
    "iShares Tech Growth": 7100.4,
  },
  {
    date: "Sep 16",
    "ETF Shares Vital": 11801.3,
    "Vitainvest Core": 10501.1,
    "iShares Tech Growth": 6532.1,
  },
  {
    date: "Sep 17",
    "ETF Shares Vital": 10102.9,
    "Vitainvest Core": 8923.3,
    "iShares Tech Growth": 4332.8,
  },
  {
    date: "Sep 18",
    "ETF Shares Vital": 12132.5,
    "Vitainvest Core": 10212.1,
    "iShares Tech Growth": 7847.4,
  },
  {
    date: "Sep 19",
    "ETF Shares Vital": 12901.1,
    "Vitainvest Core": 10101.7,
    "iShares Tech Growth": 7223.3,
  },
  {
    date: "Sep 20",
    "ETF Shares Vital": 13132.6,
    "Vitainvest Core": 12132.3,
    "iShares Tech Growth": 6900.2,
  },
  {
    date: "Sep 21",
    "ETF Shares Vital": 14132.2,
    "Vitainvest Core": 13212.5,
    "iShares Tech Growth": 5932.2,
  },
  {
    date: "Sep 22",
    "ETF Shares Vital": 14245.8,
    "Vitainvest Core": 12163.4,
    "iShares Tech Growth": 5577.1,
  },
  {
    date: "Sep 23",
    "ETF Shares Vital": 14328.3,
    "Vitainvest Core": 10036.1,
    "iShares Tech Growth": 5439.2,
  },
  {
    date: "Sep 24",
    "ETF Shares Vital": 14949.9,
    "Vitainvest Core": 8985.1,
    "iShares Tech Growth": 4463.1,
  },
  {
    date: "Sep 25",
    "ETF Shares Vital": 15967.5,
    "Vitainvest Core": 9700.1,
    "iShares Tech Growth": 4123.2,
  },
  {
    date: "Sep 26",
    "ETF Shares Vital": 17349.3,
    "Vitainvest Core": 10943.4,
    "iShares Tech Growth": 3935.1,
  },
];

const summary = [
  {
    name: "ETF Shares Vital",
    value: "$21,349.36",
    invested: "$19,698.65",
    cashflow: "$14,033.74",
    gain: "+$11,012.39",
    realized: "+$177.48",
    dividends: "+$490.97",
    bgColor: "bg-blue-500",
    changeType: "positive",
  },
  {
    name: "Vitainvest Core",
    value: "$25,943.43",
    invested: "$23,698.65",
    cashflow: "$11,033.74",
    gain: "+$3,012.39",
    realized: "+$565.41",
    dividends: "+$290.97",
    bgColor: "bg-violet-500",
    changeType: "positive",
  },
  {
    name: "iShares Tech Growth",
    value: "$9,443.46",
    invested: "$14,698.65",
    cashflow: "$2,033.74",
    gain: "-$5,012.39",
    realized: "-$634.42",
    dividends: "-$990.97",
    bgColor: "bg-fuchsia-500",
    changeType: "negative",
  },
];

const valueFormatter = (number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export function CardDataBarsFlex() {
  return (
    <>
      <Grid numItemsSm={2} numItemsLg={3} className="gap-2">
        <Card className="max-w-md mx-auto">
          <Flex className="truncate" justifyContent="between">
            <Flex className="truncate" justifyContent="start">
              <Text>
                <Bold>Zurich</Bold>
              </Text>
              <Icon
                variant="simple"
                icon={ChevronDoubleRightIcon}
                size="xs"
                color="slate"
              />
              <Text className="truncate">
                <Bold>Vienna</Bold>
              </Text>
            </Flex>
            <Text color="indigo">
              <Bold>On time</Bold>
            </Text>
          </Flex>
          <ProgressBar color="indigo" value={61} className="mt-3" />
          <Flex justifyContent="between" className="mt-3">
            <div>
              <Title>10:40</Title>
              <Text>Platform 2</Text>
            </div>
            <div>
              <Text className="text-center">7H 50M</Text>
            </div>
            <div className="text-right">
              <Title>18:30</Title>
              <Text className="text-right">No Reservation</Text>
            </div>
          </Flex>
        </Card>
        <Card className="max-w-md mx-auto">
          <Flex className="truncate" justifyContent="between">
            <Flex className="truncate" justifyContent="start">
              <Text>
                <Bold>Vienna</Bold>
              </Text>
              <Icon
                variant="simple"
                icon={ChevronDoubleRightIcon}
                size="xs"
                color="slate"
              />
              <Text className="truncate">
                <Bold>St. Anton am Arlberg </Bold>
              </Text>
            </Flex>
            <Text color="rose">
              <Bold>Delayed</Bold>
            </Text>
          </Flex>
          <ProgressBar
            value={65}
            showAnimation={true}
            color="rose"
            className="mt-3"
          />
          <Flex justifyContent="between" className="mt-3">
            <div>
              <Title>13:30</Title>
              <Text>Sched. 13:30</Text>
            </div>
            <div className="text-right">
              <Title>19:40</Title>
              <Text className="text-right">Sched. 18:55</Text>
            </div>
          </Flex>
          <Callout
            title="+45 minutes behind plan"
            icon={ExclamationIcon}
            color="rose"
            className="mt-6"
          >
            Due to maintenance work, we have a minor delay. If you need
            assistance with your travels today please contact the info hotline.
          </Callout>
        </Card>
        <Card className="max-w-md mx-auto">
          <Flex justifyContent="start">
            <Text>
              <Bold>Nightjet Direction Bregenz</Bold>
            </Text>
            <Icon variant="simple" icon={MoonIcon} size="xs" color="slate" />
          </Flex>
          <Flex justifyContent="between" className="mt-3 space-x-3">
            <Title>22:55</Title>
            <div className="w-full">
              <CategoryBar
                values={[75, 15, 10]}
                markerValue={75}
                colors={["yellow", "gray", "gray"]}
                showLabels={false}
              />
            </div>
            <Title>10:22</Title>
          </Flex>
          <Flex className="mt-3">
            <div>
              <Flex
                alignItems="baseline"
                justifyContent="start"
                className="space-x-2"
              >
                <Flex justifyContent="start" alignItems="baseline">
                  <Text>1st</Text>
                  <Icon
                    variant="simple"
                    icon={UserIcon}
                    size="xs"
                    color="slate"
                  />
                </Flex>
                <Flex justifyContent="start" alignItems="baseline">
                  <Text>2nd</Text>
                  <Icon
                    variant="simple"
                    icon={UserGroupIcon}
                    size="xs"
                    color="slate"
                  />
                </Flex>
              </Flex>
            </div>
            <Text>11H 22M</Text>
          </Flex>
          <List className="mt-4">
            <ListItem>
              <div>
                <Text>
                  <Bold>22:55</Bold> Vienna{" "}
                </Text>
                <Text>
                  <Bold>07:49</Bold> Feldkirch{" "}
                </Text>
              </div>
              <div>
                <Text className="text-right">
                  <Bold>Pl. 1</Bold>{" "}
                </Text>
                <Text className="text-right">
                  <Bold>Pl. 9</Bold>{" "}
                </Text>
              </div>
            </ListItem>
            <ListItem>
              <div>
                <Text>
                  <Bold>08:05</Bold> Feldkirch{" "}
                </Text>
                <Text>
                  <Bold>08:28</Bold> Buchs SG{" "}
                </Text>
              </div>
              <div>
                <Text className="text-right">
                  <Bold>Pl. 7</Bold>{" "}
                </Text>
                <Text className="text-right">
                  <Bold>Pl. 3</Bold>{" "}
                </Text>
              </div>
            </ListItem>
            <ListItem>
              <div>
                <Text>
                  <Bold>08:30</Bold> Buchs SG{" "}
                </Text>
                <Text>
                  <Bold>10:22</Bold> Zurich HB{" "}
                </Text>
              </div>
              <div>
                <Text className="text-right">
                  <Bold>Pl. 5</Bold>{" "}
                </Text>
                <Text className="text-right">
                  <Bold>Pl. 6</Bold>{" "}
                </Text>
              </div>
            </ListItem>
          </List>
        </Card>
        <Card className="mx-auto max-w-lg">
          <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
            Website Analytics
          </h3>
          <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
            <span>Source</span>
            <span>Views</span>
          </p>
          <BarList data={dataCardDataBarsFlex} className="mt-2" />
        </Card>
      </Grid>

      <Grid numItemsSm={2} numItemsLg={1} className="gap-2">
        <Card>
          <>
            <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Portfolio performance
            </h3>
            <p className="mt-1 text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              $32,227.40
            </p>
            <p className="mt-1 text-tremor-default font-medium">
              <span className="text-emerald-700 dark:text-emerald-500">
                +$430.90 (4.1%)
              </span>{" "}
              <span className="font-normal text-tremor-content dark:text-dark-tremor-content">
                Past 24 hours
              </span>
            </p>
            <LineChart
              data={dataCardDataBarsFlex2}
              index="date"
              categories={[
                "ETF Shares Vital",
                "Vitainvest Core",
                "iShares Tech Growth",
              ]}
              colors={["blue", "violet", "fuchsia"]}
              valueFormatter={valueFormatter}
              yAxisWidth={55}
              onValueChange={() => {}}
              className="mt-6 hidden h-96 sm:block"
            />
            <LineChart
              data={dataCardDataBarsFlex2}
              index="date"
              categories={[
                "ETF Shares Vital",
                "Vitainvest Core",
                "iShares Tech Growth",
              ]}
              colors={["blue", "violet", "fuchsia"]}
              valueFormatter={valueFormatter}
              showYAxis={false}
              showLegend={false}
              startEndOnly={true}
              className="mt-6 h-72 sm:hidden"
            />
            <Table className="mt-8">
              <TableHead>
                <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
                  <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Name
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Value
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Invested
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Cashflow
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Gain
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Realized
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Dividends
                  </TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {summary.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                      <div className="flex space-x-3">
                        <span
                          className={classNames(
                            item.bgColor,
                            "w-1 shrink-0 rounded"
                          )}
                          aria-hidden={true}
                        />
                        <span>{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{item.value}</TableCell>
                    <TableCell className="text-right">
                      {item.invested}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.cashflow}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={classNames(
                          item.changeType === "positive"
                            ? "text-emerald-700 dark:text-emerald-500"
                            : "text-red-700 dark:text-red-500"
                        )}
                      >
                        {item.gain}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={classNames(
                          item.changeType === "positive"
                            ? "text-emerald-700 dark:text-emerald-500"
                            : "text-red-700 dark:text-red-500"
                        )}
                      >
                        {item.realized}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={classNames(
                          item.changeType === "positive"
                            ? "text-emerald-700 dark:text-emerald-500"
                            : "text-red-700 dark:text-red-500"
                        )}
                      >
                        {item.dividends}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        </Card>
      </Grid>
    </>
  );
}
