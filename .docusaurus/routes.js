import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/phys/',
    component: ComponentCreator('/phys/', '671'),
    routes: [
      {
        path: '/phys/',
        component: ComponentCreator('/phys/', 'fa2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/balance-manipulation-and-whole-body-control',
        component: ComponentCreator('/phys/balance-manipulation-and-whole-body-control', '9b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/capstone-autonomous-humanoid',
        component: ComponentCreator('/phys/capstone-autonomous-humanoid', 'f65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/conversational-robotics-voice-to-action',
        component: ComponentCreator('/phys/conversational-robotics-voice-to-action', 'bfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/embodied-intelligence-and-humanoids',
        component: ComponentCreator('/phys/embodied-intelligence-and-humanoids', 'aab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/introduction-to-physical-ai',
        component: ComponentCreator('/phys/introduction-to-physical-ai', 'c3c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/isaac-ros-and-perception',
        component: ComponentCreator('/phys/isaac-ros-and-perception', '342'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/navigation-and-bipedal-locomotion',
        component: ComponentCreator('/phys/navigation-and-bipedal-locomotion', '76b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/nvidia-isaac-sim-and-digital-twins',
        component: ComponentCreator('/phys/nvidia-isaac-sim-and-digital-twins', 'c6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/recommended-humanoid-robots',
        component: ComponentCreator('/phys/recommended-humanoid-robots', '626'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/ros2-the-robotic-nervous-system',
        component: ComponentCreator('/phys/ros2-the-robotic-nervous-system', 'f99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/sensors-in-physical-ai',
        component: ComponentCreator('/phys/sensors-in-physical-ai', 'cd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/simulation-with-gazebo',
        component: ComponentCreator('/phys/simulation-with-gazebo', '558'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/student-hardware-guide',
        component: ComponentCreator('/phys/student-hardware-guide', 'f47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/urdf-and-robot-description',
        component: ComponentCreator('/phys/urdf-and-robot-description', 'a52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/phys/vision-language-action-models',
        component: ComponentCreator('/phys/vision-language-action-models', '97b'),
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
