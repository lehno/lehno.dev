import './styles.css';
import 'alpinejs';

window.getAge = function () {
    const dob = new Date(1990, 12, 20).getTime();
    const dateToCompare = new Date().getTime();
    const age = (dateToCompare - dob) / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(age);
}

window.getCompanies = function () {
    return {
        companies: [
            {
                tab: 'overview',
                title: 'March 2020 / Present - Catallyst',
                role: 'Co-Founder',
                region: 'Dublin, Ireland',
                image: 'assets/images/catallyst.png',
                description: 'At Catallyst, our mission is to boost teams and businesses providing them services and guidance to grow fast and sustainable.',
                projects: [
                    {
                        title: 'IT Services',
                        description: 'From UI/UX, passing through the development phase until the deployment on a cloud provider.'
                    }, {
                        title: 'Project and Business Change',
                        description: 'Classic and Agile methodologies implementation, project facilitation and tools assessment.'
                    }, {
                        title: 'Business Consulting',
                        description: 'Cloud infrastructure establishment, internal teams set up and market tools integration.'
                    }, {
                        title: 'Business Consulting',
                        description: 'High ranked professionals sourcing with soft and hard skills valuation.'
                    }
                ]
            },
            {
                tab: 'overview',
                title: 'Apr 2016 / Present - T-Pro',
                role: 'Senior Software Engineer',
                region: 'Dublin, Ireland',
                image: 'assets/images/tpro.png',
                description: 'T-Pro is a global leader in clinical documentation improvement software. Our cloud-based or on-premise clinical documentation solutions enable workflows for efficient and accurate speech recognition, medical transcription, messaging and coding. We facilitate a patient centred solution by making it easy for clinicians to capture the patient narrative and deliver information when it is needed most – at the point of care.',
                projects: [
                    {
                        title: 'T-Pro Medical Platform',
                        description: 'Development of a dictation system for doctors. Our dictation software allows authors to dictate in the office, at home or on the move, then manage file workflows securely and efficiently. Dictations are easily routed for typing and finished documents returned seamlessly to be signed off.'
                    },
                    {
                        title: 'T-Pro NLP API',
                        description: 'A complete micro-service API for multi-clients ready to deliver real-time speech recognition in multiple languages. The application is built using Moleculer Framework over an scalable architecture using Kubernetes, Websockets and Docker images for fast development and deployment.'
                    },
                    {
                        title: 'PWA T-Pro Recorder',
                        description: 'A Progressive web application for doctors and lawyers to dictate using the browser and speech mics with offline capabilities. Linked with T-Pro Medical Platform, written in Angular 8+.'
                    },
                    {
                        title: 'T-Pro eClinic Manager',
                        description: 'T-Pro’s eCM solution leverages existing integrations in the hospital to allow users to automatically turn normal clinic appointments into virtual consultations. Patients are sent email and SMS notifications on the day of scheduling and at the time of their appointment. They can join the consultation with the click of a button, without the need to download and install any software. Written using the latest browser features as WebRTC, web sockets and secure tokens.'
                    },
                    {
                        title: 'T-Pro eClinic Manager Mobile',
                        description: 'Android and iOS apps for doctors to access T-Pro eCM from their phones. Written using Google\'s Flutter framework and linked with T-Pro Medical Platform.'
                    }
                ]
            },
            {
                tab: 'overview',
                title: 'Mar 2016 / Mar 2017 - Media Vox Pop',
                role: 'Senior Software Engineer',
                region: 'Remote, Italy',
                image: 'assets/images/voxpop.png',
                description: 'Vox Pop is a digital communications tool created for media organizations that aims to build a deeper connection to their followers by using various crowdsourcing techniques. Our technology allows journalists to collect newsworthy material and relevant stories from everyone, everywhere.',
                projects: [
                    {
                        title: 'VoxPop',
                        description: 'Development of a complete backend API and a frontend plug-in that allows the user to reach a targeted group of followers with varying experiences and ideas from all over the world. Journalists can create video questions to specific people based on geo-location and publish the best answers using VoxPop\'s dashboard.'
                    },
                ]
            },
            {
                tab: 'overview',
                title: 'May 2014 / Feb 2016 - Camerite',
                role: 'Senior Software Architect',
                region: 'Joinville, Brazil',
                image: 'assets/images/camerite.png',
                description: 'Camerite believes that technology will revolutionize adding intelligence to cameras, making it able to transform cities into a safer and smarter place to live.',
                projects: [
                    {
                        title: 'Camerite (VejoaoVivo)',
                        description: 'Development of a big application that receives video streams from cameras around the world by RMTP, analyzing the frames real-time for unknown movements or suspicious activity. Dashboard and alerts for users that are protecting their homes.'
                    },
                ]
            },
            {
                tab: 'overview',
                title: 'Apr 2013 / May 2014 - CIPHER',
                role: 'Security System Analyst',
                region: 'Joinville, Brazil',
                image: 'assets/images/cipher.jpg',
                description: 'Cipher is a global cybersecurity company that delivers a wide range of services: Managed Security Services (MSS), Managed Detection and Response (MDR), Cyber Intelligence Services (CIS), Red Team Services (RTS), Governance, Risk and Compliance (GRC) and Cybersecurity Technology Integration (CTI). These services are supported by the Cipher Lab, an elite threat and cyber intelligence research and development lab, and also by five 24x7 Security Operations Centers (SOC).',
                projects: [
                    {
                        title: 'Cipher Security Dashboard',
                        description: 'Development of an application oriented to the area of information security using Java EE, Jboss, Vaadin and Apache Tools for networking monitoring, controll and penetration.'
                    },
                ]
            },
            {
                tab: 'overview',
                title: 'Aug 2012 / Feb 2013 - Buscapé Company',
                role: 'Mobile Developer',
                region: 'Joinville, Brazil',
                image: 'https://s.zst.com.br/web/img/themes/buscape/logo-white.svg',
                description: 'Buscapé is an application of free product search and price research services, in addition to a virtual commerce center, where you can buy products from several different stores.',
                projects: [
                    {
                        title: 'Team Leader',
                        description: 'Development of applications for mobile devices, creation and innovation of new products to the Buscapé Company in Innovation Labs. Working as leader of mobile development team with the Android platform'
                    },
                ]
            },
            {
                tab: 'overview',
                title: 'Oct 2011 / Aug 2012 - Unimed',
                role: 'Systems Analyst',
                region: 'Joinville, Brazil',
                image: 'assets/images/unimed.png',
                description: 'Unimed is the biggest hospital chain in Brazil with 119 branches. Unimed Federação is responsible for all the technology running in their hospitals.',
                projects: [
                    {
                        title: 'Health Portal of Santa Catarina',
                        description: 'A portal for government patients to access their health details, doctors and clinics. Written in Liferay and Java.'
                    },
                ]
            },
            {
                tab: 'overview',
                title: 'Nov 2010 / Sep 2011 - TOTVS',
                role: 'Developer',
                region: 'Joinville, Brazil',
                image: 'assets/images/totvs.png',
                description: 'Leader in the market for business management software and genuinely Brazilian, TOTVS is recognized for its innovation. Holder of more than 50% of marketshare in Brazil and also leader in Latin America, according to Gartner®, has as its inspiration source its 26 thousand customers.',
                projects: [
                    {
                        title: 'HCM - ECM',
                        description: 'Development of innovations on HCM - Human Resources module for ECM from Totvs, using Java and Progress 4GL.'
                    },
                ]
            }
        ]
    }
}

window.getSkills = function () {
    return {
        items: [{
            name: 'Architecture',
            width: 'width: 85%;',
            score: 85,
            details: {
                label: 'Last 2 years focusing on microservices for a speech recognition related project. Main author of 6 big projects currently in production. I would say I can work as dev ops as well, after doing every single part of a product release manually and implementing tools for automation.',
                tools: ['Monolith', 'Microservices', 'Docker', 'Kubernetes', 'Networking', 'Grafana']
            }
        }, {
            name: 'AWS',
            width: 'width: 90%;',
            score: 90,
            details: {
                label: 'Best cloud in my opnion, many incredible tools that when well used, its cheaper than the others.',
                tools: ['Lambda', 'Rounte53', 'CloudWatch', 'EKS', 'ECS', 'S3', 'SNS', 'SES', 'Elastic Transcoder', 'CodeCommit', 'CodeDeploy', 'CodePipeline', 'EC2', 'ALB', 'ELB', 'RDS', 'Elastic Cache', 'Serverless']
            }
        }, {
            name: 'Linux',
            width: 'width: 87%;',
            score: 87,
            details: {
                label: 'Servers use linux. You must know it to have things working.',
                tools: ['Shell', 'Bash', 'SSH']
            }
        }, {
            name: 'GCP',
            width: 'width: 65%;',
            score: 65,
            details: {
                label: 'Google Cloud Platform is a big one, using in small projects and a kubernetes environment.',
                tools: ['Firebase', 'GKE', 'Maps API', 'Places API', 'Crashlytics']
            }
        }, {
            name: 'CI/CD',
            width: 'width: 75%;',
            score: 75,
            details: {
                label: 'Are you still looking for someone that knows SVN? Im sorry.',
                tools: ['Git', 'Github actions', 'Drone.io', 'Jenkins', 'CodeDeploy', 'CodePipeline', 'Gitlab', 'Webpack', 'Bower', 'Gulp']
            }
        }, {
            name: 'Video Stream',
            width: 'width: 60%;',
            score: 60,
            details: {
                label: '2 big experiences working with video via web. First was using Wowza Streaming for a large project with real time camera recording and a WebRTC video call for doctors, which is my current project.',
                tools: ['Wowza', 'WebRTC', 'STUN', 'TURN', 'FFMPEG']
            }
        }, {
            show: true,
            name: 'Javascript',
            width: 'width: 95%;',
            score: 95,
            details: {
                label: 'This is my primary language. I don\'t care if people say it is not typed or it is not good. Today its one of the most used language and you have typescript to fix many things. Its very fast for front and backend development and it solves problems.',
                tools: ['NodeJS', 'NestJS','Svelte', 'Angular', 'AngularJS', 'React', 'VueJS', 'Typescript', 'HTML', 'CSS', 'JSON', 'JQuery', 'REST Api', 'XML', 'ExpressJS', 'Fastify', 'Socket.io']
            }
        }, {
            name: 'Flutter',
            width: 'width: 80%;',
            score: 80,
            details: {
                label: 'Flutter is amazing, 60fps on Android and iOS with many plugins. I\'m currently working with it.',
                tools: ['Dart', 'Flutter Web', 'Android', 'iOS']
            }
        }, {
            name: 'PHP',
            width: 'width: 40%;',
            score: 40,
            details: {
                label: 'I had to use for a few projects, its fine, but it\'s not my scene.',
                tools: ['Symfony']
            }
        }, {
            name: 'Python',
            width: 'width: 70%;',
            score: 70,
            details: {
                label: 'Second language I learnt. Today I\'ve been using for Speech Recognition and distributed workers.',
                tools: ['Flask', 'Kaldi', 'Speech Recognition', 'NLP']
            }
        }, {
            name: 'SQL',
            width: 'width: 93%;',
            score: 93,
            details: {
                label: 'Using sql for a long time, there is no state for a software if theres no storage.',
                tools: ['Postgres', 'NOSQL', 'PL/SQL', 'MYSQL', 'Progres 4GL', 'MongoDB', 'SQLite']
            }
        }, {
            name: 'Others',
            width: 'width: 25%;',
            score: 25,
            details: {
                label: 'Things I used along my career.',
                tools: ['Ruby on Rails', 'Wordpress', 'SquareSpace', 'Invision', 'Adobe Pack', 'Cordova', 'Aptana', 'Ionic', 'Liferay', 'SVN', 'Tailwind']
            }
        }, {
            name: 'Java',
            width: 'width: 63%;',
            score: 63,
            details: {
                label: 'First language I learnt, java opened the way for my android apps and also gave me many opportunities on my career start.',
                tools: ['Android', 'JBoss', 'Java EE', 'Kotlin']
            }
        }].sort((a, b) => a.score - b.score).reverse()
    }
}