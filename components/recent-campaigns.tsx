import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

interface CampaignData {
  customer: string;
  status: string;
  ctr: string;
  glimpseClicks: number;
  glimpseCtr: string;
  conversions: number;
  conversionsPerClick: number;
}

const campaignsData: CampaignData[] = [
  // Replace this with your actual JSON data
  {
    customer: 'Glimpse 2',
    status: 'Paused',
    ctr: '42%',
    glimpseClicks: 87,
    glimpseCtr: '19%',
    conversions: 987,
    conversionsPerClick: 11
  },
  {
    customer: 'Glimpse 3',
    status: 'Draft',
    ctr: '83%',
    glimpseClicks: 214,
    glimpseCtr: '48%',
    conversions: 4321,
    conversionsPerClick: 20
  },
  {
    customer: 'Glimpse 4',
    status: 'Completed',
    ctr: '59%',
    glimpseClicks: 152,
    glimpseCtr: '31%',
    conversions: 1872,
    conversionsPerClick: 12
  },
  {
    customer: 'Campaign X',
    status: 'Running',
    ctr: '38%',
    glimpseClicks: 121,
    glimpseCtr: '24%',
    conversions: 789,
    conversionsPerClick: 6
  },
  {
    customer: 'Engagement Y',
    status: 'Completed',
    ctr: '62%',
    glimpseClicks: 247,
    glimpseCtr: '41%',
    conversions: 2984,
    conversionsPerClick: 12
  },
  {
    customer: 'Test Z',
    status: 'Archived',
    ctr: '21%',
    glimpseClicks: 54,
    glimpseCtr: '13%',
    conversions: 321,
    conversionsPerClick: 6
  },
  {
    customer: 'New Campaign',
    status: 'Completed',
    ctr: '45%',
    glimpseClicks: 237,
    glimpseCtr: '41%',
    conversions: 2684,
    conversionsPerClick: 12
  },
  {
    customer: 'Engagement U',
    status: 'Archived',
    ctr: '65%',
    glimpseClicks: 3447,
    glimpseCtr: '45%',
    conversions: 2684,
    conversionsPerClick: 122
  }
  // Add more campaign data objects here
];

export default function RecentCampaigns() {
  return (
    <Table className="overflow-x-scroll text-center">
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead className="table-cell">Status</TableHead>
          <TableHead className="table-cell">CTR</TableHead>
          <TableHead className="table-cell">Glimpse Clicks</TableHead>
          <TableHead className="table-cell">Glimpse CTR</TableHead>
          <TableHead className="table-cell">Conversions</TableHead>
          <TableHead className="table-cell">Conversions/Click</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {campaignsData.map((campaign) => (
          <TableRow key={campaign.customer}>
            <TableCell>
              <div className="font-medium">{campaign.customer}</div>
            </TableCell>
            <TableCell className="table-cell">
              <Badge className="text-xs" variant="secondary">
                {campaign.status}
              </Badge>
            </TableCell>
            <TableCell className="table-cell">{campaign.ctr}</TableCell>
            <TableCell className="table-cell">
              {campaign.glimpseClicks}
            </TableCell>
            <TableCell className="table-cell">{campaign.glimpseCtr}</TableCell>
            <TableCell className="table-cell">{campaign.conversions}</TableCell>
            <TableCell className="table-cell">
              {campaign.conversionsPerClick}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
