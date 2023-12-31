import FolderIcon from '../../../../assets/icons/FolderIcon';
import FinishFlagIcon from '../../../../assets/icons/FinishFlagIcon';
import { ConnectApp, Finish, SelectRepository } from './StepperContent';
import HelmIcon from '../../../../assets/icons/technology/HelmIcon';

export const helmSteps = ['Connect Repo', 'Select Charts', 'Finish'];

export const helmStepIcons = {
  1: <HelmIcon height={32} width={32} />,
  2: <FolderIcon />,
  3: <FinishFlagIcon width="2rem" />,
};

export const helmStepContent = {
  1: {
    component: <ConnectApp />,
    props: ['handleNext', 'sharedData', 'setSharedData'],
  },
  2: {
    component: <SelectRepository />,
    props: ['handleNext', 'sharedData', 'setSharedData'],
  },
  3: {
    component: <Finish />,
    props: ['sharedData', 'setSharedData'],
  },
};

export const ConnectionStepperTips = [
  'GitOps is more fun with friends. Invite one today.',
  'Meshplay works with multiple Kubernetes clusters. Connect each of yours by uploading your kubeconfig and letting Meshplay do the rest.',
  'Import your Docker Compose, Helm Chart, and Kubernetes mainfests. Let Meshplay visualize and deploy them.',
];

export const ConnectAppContent = {
  title: 'Connecting your Helm Repository',
  subtitle:
    'Integrate Meshplay seamlessly with your existing Helm-based process. Connect Meshplay to one or more Helm repositories and import one or all Helm charts from your repo.',
  tips: 'Meshplay is optimized for GitOps-centric workflows. Connect your  Helm repositories for a full experience.',
  btnText: 'Connect',
  cancel: true,
};

export const SelectRepositoryContent = {
  title: 'Select Helm Repository',
  tips: 'Meshplay is optimized for codebases that are actively undergoing development.',
  btnText: 'Next',
};

export const FinishContent = {
  btnText: 'Finish',
};
