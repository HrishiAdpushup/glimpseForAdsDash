import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Button } from '@/components/ui/button';
import RecentCampaigns from '@/components/recent-campaigns';
import { ArrowDownIcon, ArrowUpIcon } from '@/components/arrowIcons';
import { Overview } from '@/components/overview';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import LineChart from '@/components/linechart';

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        {/* Cards */}
        <div className="space-y-4">
          {/* First Row */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Impressions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Impressions
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75,231</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            {/* CPM */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CPM</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3.43</div>
                <p className="text-xs text-muted-foreground">
                  +18.1% from last month
                </p>
              </CardContent>
            </Card>
            {/* Conversions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Conversions
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            {/* CONVERSION/CLICKS */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  CONVERSION/CLICKS
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 lg:grid-cols-8">
            {/* Performence Trends Card */}
            <Card className="col-span-4 row-span-2">
              <CardHeader>
                <CardTitle className="mb-2 text-2xl font-bold">
                  Performance Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[16/9]" />
              </CardContent>
            </Card>
            {/* Click Tracking Card */}
            <Card className="col-span-4 row-span-1">
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-4xl font-bold">
                    Interactions
                  </CardTitle>
                  <CardDescription className="text-xl">
                    Clicks and Conversions
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      Clicks
                    </div>
                    <div className="text-4xl font-semibold">9638</div>
                    <div className="flex items-center gap-2 text-sm text-green-500">
                      <ArrowUpIcon className="h-4 w-4" />
                      <span>+32.5%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      Hovers
                    </div>
                    <div className="text-4xl font-semibold">2358</div>
                    <div className="flex items-center gap-2 text-sm text-red-500">
                      <ArrowDownIcon className="h-4 w-4" />
                      <span>+13.2%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      CTR
                    </div>
                    <div className="text-4xl font-semibold">23%</div>
                    <div className="flex items-center gap-2 text-sm text-red-500">
                      <ArrowDownIcon className="h-4 w-4" />
                      <span>+10.6%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Glimpse CTR Card */}
            <Card className="col-span-4 row-span-1">
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-4xl font-bold">
                    Glimpse Interactions
                  </CardTitle>
                  <CardDescription className="text-xl">
                    Clicks and Conversions
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      Glimpse Clicks
                    </div>
                    <div className="text-4xl font-semibold">1,234</div>
                    <div className="flex items-center gap-2 text-sm text-green-500">
                      <ArrowUpIcon className="h-4 w-4" />
                      <span>+12.5%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      Glimpse CTR
                    </div>
                    <div className="text-4xl font-semibold">6.7%</div>
                    <div className="flex items-center gap-2 text-sm text-red-500">
                      <ArrowDownIcon className="h-4 w-4" />
                      <span>+2.2%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      Conversions
                    </div>
                    <div className="text-4xl font-semibold">183</div>
                    <div className="flex items-center gap-2 text-sm text-red-500">
                      <ArrowDownIcon className="h-4 w-4" />
                      <span>+2.6%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8">
            {/* Campaigns */}
            <Card className="col-span-4 md:col-span-5">
              <CardHeader>
                <CardTitle>Campaigns</CardTitle>
                <CardDescription>Your recent top campaigns.</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentCampaigns />
              </CardContent>
            </Card>
            {/* Glimpse Stats Overview */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>
                  Performance overview of recent campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Overview />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
