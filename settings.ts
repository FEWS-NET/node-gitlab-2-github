import Settings from './src/settings';
import process from 'node:process';

export default {
  gitlab: {
    // url: process.env.GITLAB_URL,
    token: process.env.GITLAB_TOKEN,
    projectId: null,
    sessionCookie: null,
  },
  github: {
    // baseUrl: 'https://github.mycompany.com:123/etc',
    // apiUrl: 'https://api.github.mycompany.com',
    owner: process.env.GITHUB_OWNER,
    ownerIsOrg: true,
    token: process.env.GITHUB_TOKEN,
    token_owner: process.env.GITHUB_TOKEN_OWNER,
    repo: process.env.GITHUB_REPO,
    recreateRepo: false,
  },
  usermap: {
    'dodida': 'odida',
    'roger.hunwicks': 'rhunwicks',
    'kisaja': 'jeverling',
    'davenenglish': 'denglish-fews',
    'akyenze': 'akyenze',
    'henock.lulseged': 'henockl',
    'chris.preager': 'techicaltich',
    'joseph.luketelo': 'joseph-luketelo',
    'jake.stoll': 'Jake-Stoll',
  },
  projectmap: {
    '${GITLAB_OWNER}/${GITLAB_REPO}': '${GITHUB_OWNER}/${GITHUB_REPO}',
  },
  s3: {
    accessKeyId: process.env.S3_ACCESS_ID,
    secretAccessKey: process.env.S3_SECRET_KEY,
    bucket: process.env.S3_BUCKET,
  },
  conversion: {
    useLowerCaseLabels: true,
  },
  transfer: {
    description: true,
    milestones: true,
    labels: true,
    issues: true,
    mergeRequests: true,
    releases: true,
  },
  debug: false,
  useIssueImportAPI: true,
  usePlaceholderMilestonesForMissingMilestones: true,
  usePlaceholderIssuesForMissingIssues: true,
  useReplacementIssuesForCreationFails: true,
  useIssuesForAllMergeRequests: false,
  filterByLabel: null,
  skipMergeRequestStates: [],
  skipMatchingComments: [],
  mergeRequests: {
    logFile: './merge-requests.json',
    log: false,
  },
} as Settings;
