import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physai-humanoid/',
    component: ComponentCreator('/physai-humanoid/', '60b'),
    routes: [
      {
        path: '/physai-humanoid/',
        component: ComponentCreator('/physai-humanoid/', '399'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/balance-manipulation-and-whole-body-control',
        component: ComponentCreator('/physai-humanoid/balance-manipulation-and-whole-body-control', '3cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/capstone-autonomous-humanoid',
        component: ComponentCreator('/physai-humanoid/capstone-autonomous-humanoid', '7d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/conversational-robotics-voice-to-action',
        component: ComponentCreator('/physai-humanoid/conversational-robotics-voice-to-action', '7a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/embodied-intelligence-and-humanoids',
        component: ComponentCreator('/physai-humanoid/embodied-intelligence-and-humanoids', 'd5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/introduction-to-physical-ai',
        component: ComponentCreator('/physai-humanoid/introduction-to-physical-ai', 'e0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/isaac-ros-and-perception',
        component: ComponentCreator('/physai-humanoid/isaac-ros-and-perception', '10c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/navigation-and-bipedal-locomotion',
        component: ComponentCreator('/physai-humanoid/navigation-and-bipedal-locomotion', 'ccc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/nvidia-isaac-sim-and-digital-twins',
        component: ComponentCreator('/physai-humanoid/nvidia-isaac-sim-and-digital-twins', '780'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/recommended-humanoid-robots',
        component: ComponentCreator('/physai-humanoid/recommended-humanoid-robots', '2a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/ros2-the-robotic-nervous-system',
        component: ComponentCreator('/physai-humanoid/ros2-the-robotic-nervous-system', 'b16'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/sensors-in-physical-ai',
        component: ComponentCreator('/physai-humanoid/sensors-in-physical-ai', '864'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/simulation-with-gazebo',
        component: ComponentCreator('/physai-humanoid/simulation-with-gazebo', '8e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/student-hardware-guide',
        component: ComponentCreator('/physai-humanoid/student-hardware-guide', 'c53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/urdf-and-robot-description',
        component: ComponentCreator('/physai-humanoid/urdf-and-robot-description', '423'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/physai-humanoid/vision-language-action-models',
        component: ComponentCreator('/physai-humanoid/vision-language-action-models', '3c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
