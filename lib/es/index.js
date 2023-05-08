import * as React from 'react';
import React__default, {
  createContext,
  useContext,
  useEffect,
  createRef,
  createElement,
  Component,
  useState,
} from 'react';
import require$$0 from 'core-js-pure/stable/object/keys';
import require$$0$1 from 'core-js-pure/stable/object/get-own-property-symbols';
import require$$0$2 from 'core-js-pure/stable/instance/filter';
import require$$0$3 from 'core-js-pure/stable/object/get-own-property-descriptor';
import require$$0$4 from 'core-js-pure/stable/object/get-own-property-descriptors';
import require$$0$5 from 'core-js-pure/stable/object/define-properties';
import require$$0$6 from 'core-js-pure/stable/object/define-property';
import require$$0$7 from 'core-js-pure/features/promise';
import require$$0$8 from 'core-js-pure/features/array/is-array';
import require$$0$9 from 'core-js-pure/features/symbol';
import require$$0$a from 'core-js-pure/features/get-iterator-method';
import require$$0$b from 'core-js-pure/features/instance/slice';
import require$$0$c from 'core-js-pure/features/array/from';
import require$$0$d from 'core-js-pure/features/object/get-own-property-symbols';
import require$$0$e from 'core-js-pure/features/instance/index-of';
import require$$0$f from 'core-js-pure/features/object/keys';
import require$$0$g from 'core-js-pure/features/object/define-property';
import require$$0$h from 'core-js-pure/features/symbol/iterator';
import require$$0$i from 'core-js-pure/features/object/create';
import require$$0$j from 'core-js-pure/features/object/get-prototype-of';
import require$$0$k from 'core-js-pure/features/instance/for-each';
import require$$0$l from 'core-js-pure/features/object/set-prototype-of';
import require$$0$m from 'core-js-pure/features/instance/reverse';
import require$$0$n from 'core-js-pure/stable/instance/for-each';
import require$$0$o from 'core-js-pure/stable/instance/find';
import require$$0$p from 'core-js-pure/stable/instance/concat';
import require$$0$q from 'core-js-pure/stable/instance/map';
import require$$0$r from 'core-js-pure/stable/instance/find-index';
import AccountBookFilledSvg from '@ant-design/icons-svg/es/asn/AccountBookFilled';
import warn from 'rc-util/es/warning';
import { updateCSS } from 'rc-util/es/Dom/dynamicCSS';
import AccountBookOutlinedSvg from '@ant-design/icons-svg/es/asn/AccountBookOutlined';
import AccountBookTwoToneSvg from '@ant-design/icons-svg/es/asn/AccountBookTwoTone';
import AimOutlinedSvg from '@ant-design/icons-svg/es/asn/AimOutlined';
import AlertFilledSvg from '@ant-design/icons-svg/es/asn/AlertFilled';
import AlertOutlinedSvg from '@ant-design/icons-svg/es/asn/AlertOutlined';
import AlertTwoToneSvg from '@ant-design/icons-svg/es/asn/AlertTwoTone';
import AlibabaOutlinedSvg from '@ant-design/icons-svg/es/asn/AlibabaOutlined';
import AlignCenterOutlinedSvg from '@ant-design/icons-svg/es/asn/AlignCenterOutlined';
import AlignLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/AlignLeftOutlined';
import AlignRightOutlinedSvg from '@ant-design/icons-svg/es/asn/AlignRightOutlined';
import AlipayCircleFilledSvg from '@ant-design/icons-svg/es/asn/AlipayCircleFilled';
import AlipayCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/AlipayCircleOutlined';
import AlipayOutlinedSvg from '@ant-design/icons-svg/es/asn/AlipayOutlined';
import AlipaySquareFilledSvg from '@ant-design/icons-svg/es/asn/AlipaySquareFilled';
import AliwangwangFilledSvg from '@ant-design/icons-svg/es/asn/AliwangwangFilled';
import AliwangwangOutlinedSvg from '@ant-design/icons-svg/es/asn/AliwangwangOutlined';
import AliyunOutlinedSvg from '@ant-design/icons-svg/es/asn/AliyunOutlined';
import AmazonCircleFilledSvg from '@ant-design/icons-svg/es/asn/AmazonCircleFilled';
import AmazonOutlinedSvg from '@ant-design/icons-svg/es/asn/AmazonOutlined';
import AmazonSquareFilledSvg from '@ant-design/icons-svg/es/asn/AmazonSquareFilled';
import AndroidFilledSvg from '@ant-design/icons-svg/es/asn/AndroidFilled';
import AndroidOutlinedSvg from '@ant-design/icons-svg/es/asn/AndroidOutlined';
import AntCloudOutlinedSvg from '@ant-design/icons-svg/es/asn/AntCloudOutlined';
import AntDesignOutlinedSvg from '@ant-design/icons-svg/es/asn/AntDesignOutlined';
import ApartmentOutlinedSvg from '@ant-design/icons-svg/es/asn/ApartmentOutlined';
import ApiFilledSvg from '@ant-design/icons-svg/es/asn/ApiFilled';
import ApiOutlinedSvg from '@ant-design/icons-svg/es/asn/ApiOutlined';
import ApiTwoToneSvg from '@ant-design/icons-svg/es/asn/ApiTwoTone';
import AppleFilledSvg from '@ant-design/icons-svg/es/asn/AppleFilled';
import AppleOutlinedSvg from '@ant-design/icons-svg/es/asn/AppleOutlined';
import AppstoreAddOutlinedSvg from '@ant-design/icons-svg/es/asn/AppstoreAddOutlined';
import AppstoreFilledSvg from '@ant-design/icons-svg/es/asn/AppstoreFilled';
import AppstoreOutlinedSvg from '@ant-design/icons-svg/es/asn/AppstoreOutlined';
import AppstoreTwoToneSvg from '@ant-design/icons-svg/es/asn/AppstoreTwoTone';
import AreaChartOutlinedSvg from '@ant-design/icons-svg/es/asn/AreaChartOutlined';
import ArrowDownOutlinedSvg from '@ant-design/icons-svg/es/asn/ArrowDownOutlined';
import ArrowLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/ArrowLeftOutlined';
import ArrowRightOutlinedSvg from '@ant-design/icons-svg/es/asn/ArrowRightOutlined';
import ArrowUpOutlinedSvg from '@ant-design/icons-svg/es/asn/ArrowUpOutlined';
import ArrowsAltOutlinedSvg from '@ant-design/icons-svg/es/asn/ArrowsAltOutlined';
import AudioFilledSvg from '@ant-design/icons-svg/es/asn/AudioFilled';
import AudioMutedOutlinedSvg from '@ant-design/icons-svg/es/asn/AudioMutedOutlined';
import AudioOutlinedSvg from '@ant-design/icons-svg/es/asn/AudioOutlined';
import AudioTwoToneSvg from '@ant-design/icons-svg/es/asn/AudioTwoTone';
import AuditOutlinedSvg from '@ant-design/icons-svg/es/asn/AuditOutlined';
import BackwardFilledSvg from '@ant-design/icons-svg/es/asn/BackwardFilled';
import BackwardOutlinedSvg from '@ant-design/icons-svg/es/asn/BackwardOutlined';
import BankFilledSvg from '@ant-design/icons-svg/es/asn/BankFilled';
import BankOutlinedSvg from '@ant-design/icons-svg/es/asn/BankOutlined';
import BankTwoToneSvg from '@ant-design/icons-svg/es/asn/BankTwoTone';
import BarChartOutlinedSvg from '@ant-design/icons-svg/es/asn/BarChartOutlined';
import BarcodeOutlinedSvg from '@ant-design/icons-svg/es/asn/BarcodeOutlined';
import BarsOutlinedSvg from '@ant-design/icons-svg/es/asn/BarsOutlined';
import BehanceCircleFilledSvg from '@ant-design/icons-svg/es/asn/BehanceCircleFilled';
import BehanceOutlinedSvg from '@ant-design/icons-svg/es/asn/BehanceOutlined';
import BehanceSquareFilledSvg from '@ant-design/icons-svg/es/asn/BehanceSquareFilled';
import BehanceSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/BehanceSquareOutlined';
import BellFilledSvg from '@ant-design/icons-svg/es/asn/BellFilled';
import BellOutlinedSvg from '@ant-design/icons-svg/es/asn/BellOutlined';
import BellTwoToneSvg from '@ant-design/icons-svg/es/asn/BellTwoTone';
import BgColorsOutlinedSvg from '@ant-design/icons-svg/es/asn/BgColorsOutlined';
import BlockOutlinedSvg from '@ant-design/icons-svg/es/asn/BlockOutlined';
import BoldOutlinedSvg from '@ant-design/icons-svg/es/asn/BoldOutlined';
import BookFilledSvg from '@ant-design/icons-svg/es/asn/BookFilled';
import BookOutlinedSvg from '@ant-design/icons-svg/es/asn/BookOutlined';
import BookTwoToneSvg from '@ant-design/icons-svg/es/asn/BookTwoTone';
import BorderBottomOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderBottomOutlined';
import BorderHorizontalOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderHorizontalOutlined';
import BorderInnerOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderInnerOutlined';
import BorderLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderLeftOutlined';
import BorderOuterOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderOuterOutlined';
import BorderOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderOutlined';
import BorderRightOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderRightOutlined';
import BorderTopOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderTopOutlined';
import BorderVerticleOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderVerticleOutlined';
import BorderlessTableOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderlessTableOutlined';
import BoxPlotFilledSvg from '@ant-design/icons-svg/es/asn/BoxPlotFilled';
import BoxPlotOutlinedSvg from '@ant-design/icons-svg/es/asn/BoxPlotOutlined';
import BoxPlotTwoToneSvg from '@ant-design/icons-svg/es/asn/BoxPlotTwoTone';
import BranchesOutlinedSvg from '@ant-design/icons-svg/es/asn/BranchesOutlined';
import BugFilledSvg from '@ant-design/icons-svg/es/asn/BugFilled';
import BugOutlinedSvg from '@ant-design/icons-svg/es/asn/BugOutlined';
import BugTwoToneSvg from '@ant-design/icons-svg/es/asn/BugTwoTone';
import BuildFilledSvg from '@ant-design/icons-svg/es/asn/BuildFilled';
import BuildOutlinedSvg from '@ant-design/icons-svg/es/asn/BuildOutlined';
import BuildTwoToneSvg from '@ant-design/icons-svg/es/asn/BuildTwoTone';
import BulbFilledSvg from '@ant-design/icons-svg/es/asn/BulbFilled';
import BulbOutlinedSvg from '@ant-design/icons-svg/es/asn/BulbOutlined';
import BulbTwoToneSvg from '@ant-design/icons-svg/es/asn/BulbTwoTone';
import CalculatorFilledSvg from '@ant-design/icons-svg/es/asn/CalculatorFilled';
import CalculatorOutlinedSvg from '@ant-design/icons-svg/es/asn/CalculatorOutlined';
import CalculatorTwoToneSvg from '@ant-design/icons-svg/es/asn/CalculatorTwoTone';
import CalendarFilledSvg from '@ant-design/icons-svg/es/asn/CalendarFilled';
import CalendarOutlinedSvg from '@ant-design/icons-svg/es/asn/CalendarOutlined';
import CalendarTwoToneSvg from '@ant-design/icons-svg/es/asn/CalendarTwoTone';
import CameraFilledSvg from '@ant-design/icons-svg/es/asn/CameraFilled';
import CameraOutlinedSvg from '@ant-design/icons-svg/es/asn/CameraOutlined';
import CameraTwoToneSvg from '@ant-design/icons-svg/es/asn/CameraTwoTone';
import CarFilledSvg from '@ant-design/icons-svg/es/asn/CarFilled';
import CarOutlinedSvg from '@ant-design/icons-svg/es/asn/CarOutlined';
import CarTwoToneSvg from '@ant-design/icons-svg/es/asn/CarTwoTone';
import CaretDownFilledSvg from '@ant-design/icons-svg/es/asn/CaretDownFilled';
import CaretDownOutlinedSvg from '@ant-design/icons-svg/es/asn/CaretDownOutlined';
import CaretLeftFilledSvg from '@ant-design/icons-svg/es/asn/CaretLeftFilled';
import CaretLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/CaretLeftOutlined';
import CaretRightFilledSvg from '@ant-design/icons-svg/es/asn/CaretRightFilled';
import CaretRightOutlinedSvg from '@ant-design/icons-svg/es/asn/CaretRightOutlined';
import CaretUpFilledSvg from '@ant-design/icons-svg/es/asn/CaretUpFilled';
import CaretUpOutlinedSvg from '@ant-design/icons-svg/es/asn/CaretUpOutlined';
import CarryOutFilledSvg from '@ant-design/icons-svg/es/asn/CarryOutFilled';
import CarryOutOutlinedSvg from '@ant-design/icons-svg/es/asn/CarryOutOutlined';
import CarryOutTwoToneSvg from '@ant-design/icons-svg/es/asn/CarryOutTwoTone';
import CheckCircleFilledSvg from '@ant-design/icons-svg/es/asn/CheckCircleFilled';
import CheckCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/CheckCircleOutlined';
import CheckCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/CheckCircleTwoTone';
import CheckOutlinedSvg from '@ant-design/icons-svg/es/asn/CheckOutlined';
import CheckSquareFilledSvg from '@ant-design/icons-svg/es/asn/CheckSquareFilled';
import CheckSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/CheckSquareOutlined';
import CheckSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/CheckSquareTwoTone';
import ChromeFilledSvg from '@ant-design/icons-svg/es/asn/ChromeFilled';
import ChromeOutlinedSvg from '@ant-design/icons-svg/es/asn/ChromeOutlined';
import CiCircleFilledSvg from '@ant-design/icons-svg/es/asn/CiCircleFilled';
import CiCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/CiCircleOutlined';
import CiCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/CiCircleTwoTone';
import CiOutlinedSvg from '@ant-design/icons-svg/es/asn/CiOutlined';
import CiTwoToneSvg from '@ant-design/icons-svg/es/asn/CiTwoTone';
import ClearOutlinedSvg from '@ant-design/icons-svg/es/asn/ClearOutlined';
import ClockCircleFilledSvg from '@ant-design/icons-svg/es/asn/ClockCircleFilled';
import ClockCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/ClockCircleOutlined';
import ClockCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/ClockCircleTwoTone';
import CloseCircleFilledSvg from '@ant-design/icons-svg/es/asn/CloseCircleFilled';
import CloseCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/CloseCircleOutlined';
import CloseCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/CloseCircleTwoTone';
import CloseOutlinedSvg from '@ant-design/icons-svg/es/asn/CloseOutlined';
import CloseSquareFilledSvg from '@ant-design/icons-svg/es/asn/CloseSquareFilled';
import CloseSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/CloseSquareOutlined';
import CloseSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/CloseSquareTwoTone';
import CloudDownloadOutlinedSvg from '@ant-design/icons-svg/es/asn/CloudDownloadOutlined';
import CloudFilledSvg from '@ant-design/icons-svg/es/asn/CloudFilled';
import CloudOutlinedSvg from '@ant-design/icons-svg/es/asn/CloudOutlined';
import CloudServerOutlinedSvg from '@ant-design/icons-svg/es/asn/CloudServerOutlined';
import CloudSyncOutlinedSvg from '@ant-design/icons-svg/es/asn/CloudSyncOutlined';
import CloudTwoToneSvg from '@ant-design/icons-svg/es/asn/CloudTwoTone';
import CloudUploadOutlinedSvg from '@ant-design/icons-svg/es/asn/CloudUploadOutlined';
import ClusterOutlinedSvg from '@ant-design/icons-svg/es/asn/ClusterOutlined';
import CodeFilledSvg from '@ant-design/icons-svg/es/asn/CodeFilled';
import CodeOutlinedSvg from '@ant-design/icons-svg/es/asn/CodeOutlined';
import CodeSandboxCircleFilledSvg from '@ant-design/icons-svg/es/asn/CodeSandboxCircleFilled';
import CodeSandboxOutlinedSvg from '@ant-design/icons-svg/es/asn/CodeSandboxOutlined';
import CodeSandboxSquareFilledSvg from '@ant-design/icons-svg/es/asn/CodeSandboxSquareFilled';
import CodeTwoToneSvg from '@ant-design/icons-svg/es/asn/CodeTwoTone';
import CodepenCircleFilledSvg from '@ant-design/icons-svg/es/asn/CodepenCircleFilled';
import CodepenCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/CodepenCircleOutlined';
import CodepenOutlinedSvg from '@ant-design/icons-svg/es/asn/CodepenOutlined';
import CodepenSquareFilledSvg from '@ant-design/icons-svg/es/asn/CodepenSquareFilled';
import CoffeeOutlinedSvg from '@ant-design/icons-svg/es/asn/CoffeeOutlined';
import ColumnHeightOutlinedSvg from '@ant-design/icons-svg/es/asn/ColumnHeightOutlined';
import ColumnWidthOutlinedSvg from '@ant-design/icons-svg/es/asn/ColumnWidthOutlined';
import CommentOutlinedSvg from '@ant-design/icons-svg/es/asn/CommentOutlined';
import CompassFilledSvg from '@ant-design/icons-svg/es/asn/CompassFilled';
import CompassOutlinedSvg from '@ant-design/icons-svg/es/asn/CompassOutlined';
import CompassTwoToneSvg from '@ant-design/icons-svg/es/asn/CompassTwoTone';
import CompressOutlinedSvg from '@ant-design/icons-svg/es/asn/CompressOutlined';
import ConsoleSqlOutlinedSvg from '@ant-design/icons-svg/es/asn/ConsoleSqlOutlined';
import ContactsFilledSvg from '@ant-design/icons-svg/es/asn/ContactsFilled';
import ContactsOutlinedSvg from '@ant-design/icons-svg/es/asn/ContactsOutlined';
import ContactsTwoToneSvg from '@ant-design/icons-svg/es/asn/ContactsTwoTone';
import ContainerFilledSvg from '@ant-design/icons-svg/es/asn/ContainerFilled';
import ContainerOutlinedSvg from '@ant-design/icons-svg/es/asn/ContainerOutlined';
import ContainerTwoToneSvg from '@ant-design/icons-svg/es/asn/ContainerTwoTone';
import ControlFilledSvg from '@ant-design/icons-svg/es/asn/ControlFilled';
import ControlOutlinedSvg from '@ant-design/icons-svg/es/asn/ControlOutlined';
import ControlTwoToneSvg from '@ant-design/icons-svg/es/asn/ControlTwoTone';
import CopyFilledSvg from '@ant-design/icons-svg/es/asn/CopyFilled';
import CopyOutlinedSvg from '@ant-design/icons-svg/es/asn/CopyOutlined';
import CopyTwoToneSvg from '@ant-design/icons-svg/es/asn/CopyTwoTone';
import CopyrightCircleFilledSvg from '@ant-design/icons-svg/es/asn/CopyrightCircleFilled';
import CopyrightCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/CopyrightCircleOutlined';
import CopyrightCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/CopyrightCircleTwoTone';
import CopyrightOutlinedSvg from '@ant-design/icons-svg/es/asn/CopyrightOutlined';
import CopyrightTwoToneSvg from '@ant-design/icons-svg/es/asn/CopyrightTwoTone';
import CreditCardFilledSvg from '@ant-design/icons-svg/es/asn/CreditCardFilled';
import CreditCardOutlinedSvg from '@ant-design/icons-svg/es/asn/CreditCardOutlined';
import CreditCardTwoToneSvg from '@ant-design/icons-svg/es/asn/CreditCardTwoTone';
import CrownFilledSvg from '@ant-design/icons-svg/es/asn/CrownFilled';
import CrownOutlinedSvg from '@ant-design/icons-svg/es/asn/CrownOutlined';
import CrownTwoToneSvg from '@ant-design/icons-svg/es/asn/CrownTwoTone';
import CustomerServiceFilledSvg from '@ant-design/icons-svg/es/asn/CustomerServiceFilled';
import CustomerServiceOutlinedSvg from '@ant-design/icons-svg/es/asn/CustomerServiceOutlined';
import CustomerServiceTwoToneSvg from '@ant-design/icons-svg/es/asn/CustomerServiceTwoTone';
import DashOutlinedSvg from '@ant-design/icons-svg/es/asn/DashOutlined';
import DashboardFilledSvg from '@ant-design/icons-svg/es/asn/DashboardFilled';
import DashboardOutlinedSvg from '@ant-design/icons-svg/es/asn/DashboardOutlined';
import DashboardTwoToneSvg from '@ant-design/icons-svg/es/asn/DashboardTwoTone';
import DatabaseFilledSvg from '@ant-design/icons-svg/es/asn/DatabaseFilled';
import DatabaseOutlinedSvg from '@ant-design/icons-svg/es/asn/DatabaseOutlined';
import DatabaseTwoToneSvg from '@ant-design/icons-svg/es/asn/DatabaseTwoTone';
import DeleteColumnOutlinedSvg from '@ant-design/icons-svg/es/asn/DeleteColumnOutlined';
import DeleteFilledSvg from '@ant-design/icons-svg/es/asn/DeleteFilled';
import DeleteOutlinedSvg from '@ant-design/icons-svg/es/asn/DeleteOutlined';
import DeleteRowOutlinedSvg from '@ant-design/icons-svg/es/asn/DeleteRowOutlined';
import DeleteTwoToneSvg from '@ant-design/icons-svg/es/asn/DeleteTwoTone';
import DeliveredProcedureOutlinedSvg from '@ant-design/icons-svg/es/asn/DeliveredProcedureOutlined';
import DeploymentUnitOutlinedSvg from '@ant-design/icons-svg/es/asn/DeploymentUnitOutlined';
import DesktopOutlinedSvg from '@ant-design/icons-svg/es/asn/DesktopOutlined';
import DiffFilledSvg from '@ant-design/icons-svg/es/asn/DiffFilled';
import DiffOutlinedSvg from '@ant-design/icons-svg/es/asn/DiffOutlined';
import DiffTwoToneSvg from '@ant-design/icons-svg/es/asn/DiffTwoTone';
import DingdingOutlinedSvg from '@ant-design/icons-svg/es/asn/DingdingOutlined';
import DingtalkCircleFilledSvg from '@ant-design/icons-svg/es/asn/DingtalkCircleFilled';
import DingtalkOutlinedSvg from '@ant-design/icons-svg/es/asn/DingtalkOutlined';
import DingtalkSquareFilledSvg from '@ant-design/icons-svg/es/asn/DingtalkSquareFilled';
import DisconnectOutlinedSvg from '@ant-design/icons-svg/es/asn/DisconnectOutlined';
import DislikeFilledSvg from '@ant-design/icons-svg/es/asn/DislikeFilled';
import DislikeOutlinedSvg from '@ant-design/icons-svg/es/asn/DislikeOutlined';
import DislikeTwoToneSvg from '@ant-design/icons-svg/es/asn/DislikeTwoTone';
import DollarCircleFilledSvg from '@ant-design/icons-svg/es/asn/DollarCircleFilled';
import DollarCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/DollarCircleOutlined';
import DollarCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/DollarCircleTwoTone';
import DollarOutlinedSvg from '@ant-design/icons-svg/es/asn/DollarOutlined';
import DollarTwoToneSvg from '@ant-design/icons-svg/es/asn/DollarTwoTone';
import DotChartOutlinedSvg from '@ant-design/icons-svg/es/asn/DotChartOutlined';
import DoubleLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/DoubleLeftOutlined';
import DoubleRightOutlinedSvg from '@ant-design/icons-svg/es/asn/DoubleRightOutlined';
import DownCircleFilledSvg from '@ant-design/icons-svg/es/asn/DownCircleFilled';
import DownCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/DownCircleOutlined';
import DownCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/DownCircleTwoTone';
import DownOutlinedSvg from '@ant-design/icons-svg/es/asn/DownOutlined';
import DownSquareFilledSvg from '@ant-design/icons-svg/es/asn/DownSquareFilled';
import DownSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/DownSquareOutlined';
import DownSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/DownSquareTwoTone';
import DownloadOutlinedSvg from '@ant-design/icons-svg/es/asn/DownloadOutlined';
import DragOutlinedSvg from '@ant-design/icons-svg/es/asn/DragOutlined';
import DribbbleCircleFilledSvg from '@ant-design/icons-svg/es/asn/DribbbleCircleFilled';
import DribbbleOutlinedSvg from '@ant-design/icons-svg/es/asn/DribbbleOutlined';
import DribbbleSquareFilledSvg from '@ant-design/icons-svg/es/asn/DribbbleSquareFilled';
import DribbbleSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/DribbbleSquareOutlined';
import DropboxCircleFilledSvg from '@ant-design/icons-svg/es/asn/DropboxCircleFilled';
import DropboxOutlinedSvg from '@ant-design/icons-svg/es/asn/DropboxOutlined';
import DropboxSquareFilledSvg from '@ant-design/icons-svg/es/asn/DropboxSquareFilled';
import EditFilledSvg from '@ant-design/icons-svg/es/asn/EditFilled';
import EditOutlinedSvg from '@ant-design/icons-svg/es/asn/EditOutlined';
import EditTwoToneSvg from '@ant-design/icons-svg/es/asn/EditTwoTone';
import EllipsisOutlinedSvg from '@ant-design/icons-svg/es/asn/EllipsisOutlined';
import EnterOutlinedSvg from '@ant-design/icons-svg/es/asn/EnterOutlined';
import EnvironmentFilledSvg from '@ant-design/icons-svg/es/asn/EnvironmentFilled';
import EnvironmentOutlinedSvg from '@ant-design/icons-svg/es/asn/EnvironmentOutlined';
import EnvironmentTwoToneSvg from '@ant-design/icons-svg/es/asn/EnvironmentTwoTone';
import EuroCircleFilledSvg from '@ant-design/icons-svg/es/asn/EuroCircleFilled';
import EuroCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/EuroCircleOutlined';
import EuroCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/EuroCircleTwoTone';
import EuroOutlinedSvg from '@ant-design/icons-svg/es/asn/EuroOutlined';
import EuroTwoToneSvg from '@ant-design/icons-svg/es/asn/EuroTwoTone';
import ExceptionOutlinedSvg from '@ant-design/icons-svg/es/asn/ExceptionOutlined';
import ExclamationCircleFilledSvg from '@ant-design/icons-svg/es/asn/ExclamationCircleFilled';
import ExclamationCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/ExclamationCircleOutlined';
import ExclamationCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/ExclamationCircleTwoTone';
import ExclamationOutlinedSvg from '@ant-design/icons-svg/es/asn/ExclamationOutlined';
import ExpandAltOutlinedSvg from '@ant-design/icons-svg/es/asn/ExpandAltOutlined';
import ExpandOutlinedSvg from '@ant-design/icons-svg/es/asn/ExpandOutlined';
import ExperimentFilledSvg from '@ant-design/icons-svg/es/asn/ExperimentFilled';
import ExperimentOutlinedSvg from '@ant-design/icons-svg/es/asn/ExperimentOutlined';
import ExperimentTwoToneSvg from '@ant-design/icons-svg/es/asn/ExperimentTwoTone';
import ExportOutlinedSvg from '@ant-design/icons-svg/es/asn/ExportOutlined';
import EyeFilledSvg from '@ant-design/icons-svg/es/asn/EyeFilled';
import EyeInvisibleFilledSvg from '@ant-design/icons-svg/es/asn/EyeInvisibleFilled';
import EyeInvisibleOutlinedSvg from '@ant-design/icons-svg/es/asn/EyeInvisibleOutlined';
import EyeInvisibleTwoToneSvg from '@ant-design/icons-svg/es/asn/EyeInvisibleTwoTone';
import EyeOutlinedSvg from '@ant-design/icons-svg/es/asn/EyeOutlined';
import EyeTwoToneSvg from '@ant-design/icons-svg/es/asn/EyeTwoTone';
import FacebookFilledSvg from '@ant-design/icons-svg/es/asn/FacebookFilled';
import FacebookOutlinedSvg from '@ant-design/icons-svg/es/asn/FacebookOutlined';
import FallOutlinedSvg from '@ant-design/icons-svg/es/asn/FallOutlined';
import FastBackwardFilledSvg from '@ant-design/icons-svg/es/asn/FastBackwardFilled';
import FastBackwardOutlinedSvg from '@ant-design/icons-svg/es/asn/FastBackwardOutlined';
import FastForwardFilledSvg from '@ant-design/icons-svg/es/asn/FastForwardFilled';
import FastForwardOutlinedSvg from '@ant-design/icons-svg/es/asn/FastForwardOutlined';
import FieldBinaryOutlinedSvg from '@ant-design/icons-svg/es/asn/FieldBinaryOutlined';
import FieldNumberOutlinedSvg from '@ant-design/icons-svg/es/asn/FieldNumberOutlined';
import FieldStringOutlinedSvg from '@ant-design/icons-svg/es/asn/FieldStringOutlined';
import FieldTimeOutlinedSvg from '@ant-design/icons-svg/es/asn/FieldTimeOutlined';
import FileAddFilledSvg from '@ant-design/icons-svg/es/asn/FileAddFilled';
import FileAddOutlinedSvg from '@ant-design/icons-svg/es/asn/FileAddOutlined';
import FileAddTwoToneSvg from '@ant-design/icons-svg/es/asn/FileAddTwoTone';
import FileDoneOutlinedSvg from '@ant-design/icons-svg/es/asn/FileDoneOutlined';
import FileExcelFilledSvg from '@ant-design/icons-svg/es/asn/FileExcelFilled';
import FileExcelOutlinedSvg from '@ant-design/icons-svg/es/asn/FileExcelOutlined';
import FileExcelTwoToneSvg from '@ant-design/icons-svg/es/asn/FileExcelTwoTone';
import FileExclamationFilledSvg from '@ant-design/icons-svg/es/asn/FileExclamationFilled';
import FileExclamationOutlinedSvg from '@ant-design/icons-svg/es/asn/FileExclamationOutlined';
import FileExclamationTwoToneSvg from '@ant-design/icons-svg/es/asn/FileExclamationTwoTone';
import FileFilledSvg from '@ant-design/icons-svg/es/asn/FileFilled';
import FileGifOutlinedSvg from '@ant-design/icons-svg/es/asn/FileGifOutlined';
import FileImageFilledSvg from '@ant-design/icons-svg/es/asn/FileImageFilled';
import FileImageOutlinedSvg from '@ant-design/icons-svg/es/asn/FileImageOutlined';
import FileImageTwoToneSvg from '@ant-design/icons-svg/es/asn/FileImageTwoTone';
import FileJpgOutlinedSvg from '@ant-design/icons-svg/es/asn/FileJpgOutlined';
import FileMarkdownFilledSvg from '@ant-design/icons-svg/es/asn/FileMarkdownFilled';
import FileMarkdownOutlinedSvg from '@ant-design/icons-svg/es/asn/FileMarkdownOutlined';
import FileMarkdownTwoToneSvg from '@ant-design/icons-svg/es/asn/FileMarkdownTwoTone';
import FileOutlinedSvg from '@ant-design/icons-svg/es/asn/FileOutlined';
import FilePdfFilledSvg from '@ant-design/icons-svg/es/asn/FilePdfFilled';
import FilePdfOutlinedSvg from '@ant-design/icons-svg/es/asn/FilePdfOutlined';
import FilePdfTwoToneSvg from '@ant-design/icons-svg/es/asn/FilePdfTwoTone';
import FilePptFilledSvg from '@ant-design/icons-svg/es/asn/FilePptFilled';
import FilePptOutlinedSvg from '@ant-design/icons-svg/es/asn/FilePptOutlined';
import FilePptTwoToneSvg from '@ant-design/icons-svg/es/asn/FilePptTwoTone';
import FileProtectOutlinedSvg from '@ant-design/icons-svg/es/asn/FileProtectOutlined';
import FileSearchOutlinedSvg from '@ant-design/icons-svg/es/asn/FileSearchOutlined';
import FileSyncOutlinedSvg from '@ant-design/icons-svg/es/asn/FileSyncOutlined';
import FileTextFilledSvg from '@ant-design/icons-svg/es/asn/FileTextFilled';
import FileTextOutlinedSvg from '@ant-design/icons-svg/es/asn/FileTextOutlined';
import FileTextTwoToneSvg from '@ant-design/icons-svg/es/asn/FileTextTwoTone';
import FileTwoToneSvg from '@ant-design/icons-svg/es/asn/FileTwoTone';
import FileUnknownFilledSvg from '@ant-design/icons-svg/es/asn/FileUnknownFilled';
import FileUnknownOutlinedSvg from '@ant-design/icons-svg/es/asn/FileUnknownOutlined';
import FileUnknownTwoToneSvg from '@ant-design/icons-svg/es/asn/FileUnknownTwoTone';
import FileWordFilledSvg from '@ant-design/icons-svg/es/asn/FileWordFilled';
import FileWordOutlinedSvg from '@ant-design/icons-svg/es/asn/FileWordOutlined';
import FileWordTwoToneSvg from '@ant-design/icons-svg/es/asn/FileWordTwoTone';
import FileZipFilledSvg from '@ant-design/icons-svg/es/asn/FileZipFilled';
import FileZipOutlinedSvg from '@ant-design/icons-svg/es/asn/FileZipOutlined';
import FileZipTwoToneSvg from '@ant-design/icons-svg/es/asn/FileZipTwoTone';
import FilterFilledSvg from '@ant-design/icons-svg/es/asn/FilterFilled';
import FilterOutlinedSvg from '@ant-design/icons-svg/es/asn/FilterOutlined';
import FilterTwoToneSvg from '@ant-design/icons-svg/es/asn/FilterTwoTone';
import FireFilledSvg from '@ant-design/icons-svg/es/asn/FireFilled';
import FireOutlinedSvg from '@ant-design/icons-svg/es/asn/FireOutlined';
import FireTwoToneSvg from '@ant-design/icons-svg/es/asn/FireTwoTone';
import FlagFilledSvg from '@ant-design/icons-svg/es/asn/FlagFilled';
import FlagOutlinedSvg from '@ant-design/icons-svg/es/asn/FlagOutlined';
import FlagTwoToneSvg from '@ant-design/icons-svg/es/asn/FlagTwoTone';
import FolderAddFilledSvg from '@ant-design/icons-svg/es/asn/FolderAddFilled';
import FolderAddOutlinedSvg from '@ant-design/icons-svg/es/asn/FolderAddOutlined';
import FolderAddTwoToneSvg from '@ant-design/icons-svg/es/asn/FolderAddTwoTone';
import FolderFilledSvg from '@ant-design/icons-svg/es/asn/FolderFilled';
import FolderOpenFilledSvg from '@ant-design/icons-svg/es/asn/FolderOpenFilled';
import FolderOpenOutlinedSvg from '@ant-design/icons-svg/es/asn/FolderOpenOutlined';
import FolderOpenTwoToneSvg from '@ant-design/icons-svg/es/asn/FolderOpenTwoTone';
import FolderOutlinedSvg from '@ant-design/icons-svg/es/asn/FolderOutlined';
import FolderTwoToneSvg from '@ant-design/icons-svg/es/asn/FolderTwoTone';
import FolderViewOutlinedSvg from '@ant-design/icons-svg/es/asn/FolderViewOutlined';
import FontColorsOutlinedSvg from '@ant-design/icons-svg/es/asn/FontColorsOutlined';
import FontSizeOutlinedSvg from '@ant-design/icons-svg/es/asn/FontSizeOutlined';
import ForkOutlinedSvg from '@ant-design/icons-svg/es/asn/ForkOutlined';
import FormOutlinedSvg from '@ant-design/icons-svg/es/asn/FormOutlined';
import FormatPainterFilledSvg from '@ant-design/icons-svg/es/asn/FormatPainterFilled';
import FormatPainterOutlinedSvg from '@ant-design/icons-svg/es/asn/FormatPainterOutlined';
import ForwardFilledSvg from '@ant-design/icons-svg/es/asn/ForwardFilled';
import ForwardOutlinedSvg from '@ant-design/icons-svg/es/asn/ForwardOutlined';
import FrownFilledSvg from '@ant-design/icons-svg/es/asn/FrownFilled';
import FrownOutlinedSvg from '@ant-design/icons-svg/es/asn/FrownOutlined';
import FrownTwoToneSvg from '@ant-design/icons-svg/es/asn/FrownTwoTone';
import FullscreenExitOutlinedSvg from '@ant-design/icons-svg/es/asn/FullscreenExitOutlined';
import FullscreenOutlinedSvg from '@ant-design/icons-svg/es/asn/FullscreenOutlined';
import FunctionOutlinedSvg from '@ant-design/icons-svg/es/asn/FunctionOutlined';
import FundFilledSvg from '@ant-design/icons-svg/es/asn/FundFilled';
import FundOutlinedSvg from '@ant-design/icons-svg/es/asn/FundOutlined';
import FundProjectionScreenOutlinedSvg from '@ant-design/icons-svg/es/asn/FundProjectionScreenOutlined';
import FundTwoToneSvg from '@ant-design/icons-svg/es/asn/FundTwoTone';
import FundViewOutlinedSvg from '@ant-design/icons-svg/es/asn/FundViewOutlined';
import FunnelPlotFilledSvg from '@ant-design/icons-svg/es/asn/FunnelPlotFilled';
import FunnelPlotOutlinedSvg from '@ant-design/icons-svg/es/asn/FunnelPlotOutlined';
import FunnelPlotTwoToneSvg from '@ant-design/icons-svg/es/asn/FunnelPlotTwoTone';
import GatewayOutlinedSvg from '@ant-design/icons-svg/es/asn/GatewayOutlined';
import GifOutlinedSvg from '@ant-design/icons-svg/es/asn/GifOutlined';
import GiftFilledSvg from '@ant-design/icons-svg/es/asn/GiftFilled';
import GiftOutlinedSvg from '@ant-design/icons-svg/es/asn/GiftOutlined';
import GiftTwoToneSvg from '@ant-design/icons-svg/es/asn/GiftTwoTone';
import GithubFilledSvg from '@ant-design/icons-svg/es/asn/GithubFilled';
import GithubOutlinedSvg from '@ant-design/icons-svg/es/asn/GithubOutlined';
import GitlabFilledSvg from '@ant-design/icons-svg/es/asn/GitlabFilled';
import GitlabOutlinedSvg from '@ant-design/icons-svg/es/asn/GitlabOutlined';
import GlobalOutlinedSvg from '@ant-design/icons-svg/es/asn/GlobalOutlined';
import GoldFilledSvg from '@ant-design/icons-svg/es/asn/GoldFilled';
import GoldOutlinedSvg from '@ant-design/icons-svg/es/asn/GoldOutlined';
import GoldTwoToneSvg from '@ant-design/icons-svg/es/asn/GoldTwoTone';
import GoldenFilledSvg from '@ant-design/icons-svg/es/asn/GoldenFilled';
import GoogleCircleFilledSvg from '@ant-design/icons-svg/es/asn/GoogleCircleFilled';
import GoogleOutlinedSvg from '@ant-design/icons-svg/es/asn/GoogleOutlined';
import GooglePlusCircleFilledSvg from '@ant-design/icons-svg/es/asn/GooglePlusCircleFilled';
import GooglePlusOutlinedSvg from '@ant-design/icons-svg/es/asn/GooglePlusOutlined';
import GooglePlusSquareFilledSvg from '@ant-design/icons-svg/es/asn/GooglePlusSquareFilled';
import GoogleSquareFilledSvg from '@ant-design/icons-svg/es/asn/GoogleSquareFilled';
import GroupOutlinedSvg from '@ant-design/icons-svg/es/asn/GroupOutlined';
import HddFilledSvg from '@ant-design/icons-svg/es/asn/HddFilled';
import HddOutlinedSvg from '@ant-design/icons-svg/es/asn/HddOutlined';
import HddTwoToneSvg from '@ant-design/icons-svg/es/asn/HddTwoTone';
import HeartFilledSvg from '@ant-design/icons-svg/es/asn/HeartFilled';
import HeartOutlinedSvg from '@ant-design/icons-svg/es/asn/HeartOutlined';
import HeartTwoToneSvg from '@ant-design/icons-svg/es/asn/HeartTwoTone';
import HeatMapOutlinedSvg from '@ant-design/icons-svg/es/asn/HeatMapOutlined';
import HighlightFilledSvg from '@ant-design/icons-svg/es/asn/HighlightFilled';
import HighlightOutlinedSvg from '@ant-design/icons-svg/es/asn/HighlightOutlined';
import HighlightTwoToneSvg from '@ant-design/icons-svg/es/asn/HighlightTwoTone';
import HistoryOutlinedSvg from '@ant-design/icons-svg/es/asn/HistoryOutlined';
import HolderOutlinedSvg from '@ant-design/icons-svg/es/asn/HolderOutlined';
import HomeFilledSvg from '@ant-design/icons-svg/es/asn/HomeFilled';
import HomeOutlinedSvg from '@ant-design/icons-svg/es/asn/HomeOutlined';
import HomeTwoToneSvg from '@ant-design/icons-svg/es/asn/HomeTwoTone';
import HourglassFilledSvg from '@ant-design/icons-svg/es/asn/HourglassFilled';
import HourglassOutlinedSvg from '@ant-design/icons-svg/es/asn/HourglassOutlined';
import HourglassTwoToneSvg from '@ant-design/icons-svg/es/asn/HourglassTwoTone';
import Html5FilledSvg from '@ant-design/icons-svg/es/asn/Html5Filled';
import Html5OutlinedSvg from '@ant-design/icons-svg/es/asn/Html5Outlined';
import Html5TwoToneSvg from '@ant-design/icons-svg/es/asn/Html5TwoTone';
import IdcardFilledSvg from '@ant-design/icons-svg/es/asn/IdcardFilled';
import IdcardOutlinedSvg from '@ant-design/icons-svg/es/asn/IdcardOutlined';
import IdcardTwoToneSvg from '@ant-design/icons-svg/es/asn/IdcardTwoTone';
import IeCircleFilledSvg from '@ant-design/icons-svg/es/asn/IeCircleFilled';
import IeOutlinedSvg from '@ant-design/icons-svg/es/asn/IeOutlined';
import IeSquareFilledSvg from '@ant-design/icons-svg/es/asn/IeSquareFilled';
import ImportOutlinedSvg from '@ant-design/icons-svg/es/asn/ImportOutlined';
import InboxOutlinedSvg from '@ant-design/icons-svg/es/asn/InboxOutlined';
import InfoCircleFilledSvg from '@ant-design/icons-svg/es/asn/InfoCircleFilled';
import InfoCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/InfoCircleOutlined';
import InfoCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/InfoCircleTwoTone';
import InfoOutlinedSvg from '@ant-design/icons-svg/es/asn/InfoOutlined';
import InsertRowAboveOutlinedSvg from '@ant-design/icons-svg/es/asn/InsertRowAboveOutlined';
import InsertRowBelowOutlinedSvg from '@ant-design/icons-svg/es/asn/InsertRowBelowOutlined';
import InsertRowLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/InsertRowLeftOutlined';
import InsertRowRightOutlinedSvg from '@ant-design/icons-svg/es/asn/InsertRowRightOutlined';
import InstagramFilledSvg from '@ant-design/icons-svg/es/asn/InstagramFilled';
import InstagramOutlinedSvg from '@ant-design/icons-svg/es/asn/InstagramOutlined';
import InsuranceFilledSvg from '@ant-design/icons-svg/es/asn/InsuranceFilled';
import InsuranceOutlinedSvg from '@ant-design/icons-svg/es/asn/InsuranceOutlined';
import InsuranceTwoToneSvg from '@ant-design/icons-svg/es/asn/InsuranceTwoTone';
import InteractionFilledSvg from '@ant-design/icons-svg/es/asn/InteractionFilled';
import InteractionOutlinedSvg from '@ant-design/icons-svg/es/asn/InteractionOutlined';
import InteractionTwoToneSvg from '@ant-design/icons-svg/es/asn/InteractionTwoTone';
import IssuesCloseOutlinedSvg from '@ant-design/icons-svg/es/asn/IssuesCloseOutlined';
import ItalicOutlinedSvg from '@ant-design/icons-svg/es/asn/ItalicOutlined';
import KeyOutlinedSvg from '@ant-design/icons-svg/es/asn/KeyOutlined';
import LaptopOutlinedSvg from '@ant-design/icons-svg/es/asn/LaptopOutlined';
import LayoutFilledSvg from '@ant-design/icons-svg/es/asn/LayoutFilled';
import LayoutOutlinedSvg from '@ant-design/icons-svg/es/asn/LayoutOutlined';
import LayoutTwoToneSvg from '@ant-design/icons-svg/es/asn/LayoutTwoTone';
import LeftCircleFilledSvg from '@ant-design/icons-svg/es/asn/LeftCircleFilled';
import LeftCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/LeftCircleOutlined';
import LeftCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/LeftCircleTwoTone';
import LeftOutlinedSvg from '@ant-design/icons-svg/es/asn/LeftOutlined';
import LeftSquareFilledSvg from '@ant-design/icons-svg/es/asn/LeftSquareFilled';
import LeftSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/LeftSquareOutlined';
import LeftSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/LeftSquareTwoTone';
import LikeFilledSvg from '@ant-design/icons-svg/es/asn/LikeFilled';
import LikeOutlinedSvg from '@ant-design/icons-svg/es/asn/LikeOutlined';
import LikeTwoToneSvg from '@ant-design/icons-svg/es/asn/LikeTwoTone';
import LineChartOutlinedSvg from '@ant-design/icons-svg/es/asn/LineChartOutlined';
import LineHeightOutlinedSvg from '@ant-design/icons-svg/es/asn/LineHeightOutlined';
import LineOutlinedSvg from '@ant-design/icons-svg/es/asn/LineOutlined';
import LinkOutlinedSvg from '@ant-design/icons-svg/es/asn/LinkOutlined';
import LinkedinFilledSvg from '@ant-design/icons-svg/es/asn/LinkedinFilled';
import LinkedinOutlinedSvg from '@ant-design/icons-svg/es/asn/LinkedinOutlined';
import Loading3QuartersOutlinedSvg from '@ant-design/icons-svg/es/asn/Loading3QuartersOutlined';
import LoadingOutlinedSvg from '@ant-design/icons-svg/es/asn/LoadingOutlined';
import LockFilledSvg from '@ant-design/icons-svg/es/asn/LockFilled';
import LockOutlinedSvg from '@ant-design/icons-svg/es/asn/LockOutlined';
import LockTwoToneSvg from '@ant-design/icons-svg/es/asn/LockTwoTone';
import LoginOutlinedSvg from '@ant-design/icons-svg/es/asn/LoginOutlined';
import LogoutOutlinedSvg from '@ant-design/icons-svg/es/asn/LogoutOutlined';
import MacCommandFilledSvg from '@ant-design/icons-svg/es/asn/MacCommandFilled';
import MacCommandOutlinedSvg from '@ant-design/icons-svg/es/asn/MacCommandOutlined';
import MailFilledSvg from '@ant-design/icons-svg/es/asn/MailFilled';
import MailOutlinedSvg from '@ant-design/icons-svg/es/asn/MailOutlined';
import MailTwoToneSvg from '@ant-design/icons-svg/es/asn/MailTwoTone';
import ManOutlinedSvg from '@ant-design/icons-svg/es/asn/ManOutlined';
import MedicineBoxFilledSvg from '@ant-design/icons-svg/es/asn/MedicineBoxFilled';
import MedicineBoxOutlinedSvg from '@ant-design/icons-svg/es/asn/MedicineBoxOutlined';
import MedicineBoxTwoToneSvg from '@ant-design/icons-svg/es/asn/MedicineBoxTwoTone';
import MediumCircleFilledSvg from '@ant-design/icons-svg/es/asn/MediumCircleFilled';
import MediumOutlinedSvg from '@ant-design/icons-svg/es/asn/MediumOutlined';
import MediumSquareFilledSvg from '@ant-design/icons-svg/es/asn/MediumSquareFilled';
import MediumWorkmarkOutlinedSvg from '@ant-design/icons-svg/es/asn/MediumWorkmarkOutlined';
import MehFilledSvg from '@ant-design/icons-svg/es/asn/MehFilled';
import MehOutlinedSvg from '@ant-design/icons-svg/es/asn/MehOutlined';
import MehTwoToneSvg from '@ant-design/icons-svg/es/asn/MehTwoTone';
import MenuFoldOutlinedSvg from '@ant-design/icons-svg/es/asn/MenuFoldOutlined';
import MenuOutlinedSvg from '@ant-design/icons-svg/es/asn/MenuOutlined';
import MenuUnfoldOutlinedSvg from '@ant-design/icons-svg/es/asn/MenuUnfoldOutlined';
import MergeCellsOutlinedSvg from '@ant-design/icons-svg/es/asn/MergeCellsOutlined';
import MessageFilledSvg from '@ant-design/icons-svg/es/asn/MessageFilled';
import MessageOutlinedSvg from '@ant-design/icons-svg/es/asn/MessageOutlined';
import MessageTwoToneSvg from '@ant-design/icons-svg/es/asn/MessageTwoTone';
import MinusCircleFilledSvg from '@ant-design/icons-svg/es/asn/MinusCircleFilled';
import MinusCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/MinusCircleOutlined';
import MinusCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/MinusCircleTwoTone';
import MinusOutlinedSvg from '@ant-design/icons-svg/es/asn/MinusOutlined';
import MinusSquareFilledSvg from '@ant-design/icons-svg/es/asn/MinusSquareFilled';
import MinusSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/MinusSquareOutlined';
import MinusSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/MinusSquareTwoTone';
import MobileFilledSvg from '@ant-design/icons-svg/es/asn/MobileFilled';
import MobileOutlinedSvg from '@ant-design/icons-svg/es/asn/MobileOutlined';
import MobileTwoToneSvg from '@ant-design/icons-svg/es/asn/MobileTwoTone';
import MoneyCollectFilledSvg from '@ant-design/icons-svg/es/asn/MoneyCollectFilled';
import MoneyCollectOutlinedSvg from '@ant-design/icons-svg/es/asn/MoneyCollectOutlined';
import MoneyCollectTwoToneSvg from '@ant-design/icons-svg/es/asn/MoneyCollectTwoTone';
import MonitorOutlinedSvg from '@ant-design/icons-svg/es/asn/MonitorOutlined';
import MoreOutlinedSvg from '@ant-design/icons-svg/es/asn/MoreOutlined';
import NodeCollapseOutlinedSvg from '@ant-design/icons-svg/es/asn/NodeCollapseOutlined';
import NodeExpandOutlinedSvg from '@ant-design/icons-svg/es/asn/NodeExpandOutlined';
import NodeIndexOutlinedSvg from '@ant-design/icons-svg/es/asn/NodeIndexOutlined';
import NotificationFilledSvg from '@ant-design/icons-svg/es/asn/NotificationFilled';
import NotificationOutlinedSvg from '@ant-design/icons-svg/es/asn/NotificationOutlined';
import NotificationTwoToneSvg from '@ant-design/icons-svg/es/asn/NotificationTwoTone';
import NumberOutlinedSvg from '@ant-design/icons-svg/es/asn/NumberOutlined';
import OneToOneOutlinedSvg from '@ant-design/icons-svg/es/asn/OneToOneOutlined';
import OrderedListOutlinedSvg from '@ant-design/icons-svg/es/asn/OrderedListOutlined';
import PaperClipOutlinedSvg from '@ant-design/icons-svg/es/asn/PaperClipOutlined';
import PartitionOutlinedSvg from '@ant-design/icons-svg/es/asn/PartitionOutlined';
import PauseCircleFilledSvg from '@ant-design/icons-svg/es/asn/PauseCircleFilled';
import PauseCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/PauseCircleOutlined';
import PauseCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/PauseCircleTwoTone';
import PauseOutlinedSvg from '@ant-design/icons-svg/es/asn/PauseOutlined';
import PayCircleFilledSvg from '@ant-design/icons-svg/es/asn/PayCircleFilled';
import PayCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/PayCircleOutlined';
import PercentageOutlinedSvg from '@ant-design/icons-svg/es/asn/PercentageOutlined';
import PhoneFilledSvg from '@ant-design/icons-svg/es/asn/PhoneFilled';
import PhoneOutlinedSvg from '@ant-design/icons-svg/es/asn/PhoneOutlined';
import PhoneTwoToneSvg from '@ant-design/icons-svg/es/asn/PhoneTwoTone';
import PicCenterOutlinedSvg from '@ant-design/icons-svg/es/asn/PicCenterOutlined';
import PicLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/PicLeftOutlined';
import PicRightOutlinedSvg from '@ant-design/icons-svg/es/asn/PicRightOutlined';
import PictureFilledSvg from '@ant-design/icons-svg/es/asn/PictureFilled';
import PictureOutlinedSvg from '@ant-design/icons-svg/es/asn/PictureOutlined';
import PictureTwoToneSvg from '@ant-design/icons-svg/es/asn/PictureTwoTone';
import PieChartFilledSvg from '@ant-design/icons-svg/es/asn/PieChartFilled';
import PieChartOutlinedSvg from '@ant-design/icons-svg/es/asn/PieChartOutlined';
import PieChartTwoToneSvg from '@ant-design/icons-svg/es/asn/PieChartTwoTone';
import PlayCircleFilledSvg from '@ant-design/icons-svg/es/asn/PlayCircleFilled';
import PlayCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/PlayCircleOutlined';
import PlayCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/PlayCircleTwoTone';
import PlaySquareFilledSvg from '@ant-design/icons-svg/es/asn/PlaySquareFilled';
import PlaySquareOutlinedSvg from '@ant-design/icons-svg/es/asn/PlaySquareOutlined';
import PlaySquareTwoToneSvg from '@ant-design/icons-svg/es/asn/PlaySquareTwoTone';
import PlusCircleFilledSvg from '@ant-design/icons-svg/es/asn/PlusCircleFilled';
import PlusCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/PlusCircleOutlined';
import PlusCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/PlusCircleTwoTone';
import PlusOutlinedSvg from '@ant-design/icons-svg/es/asn/PlusOutlined';
import PlusSquareFilledSvg from '@ant-design/icons-svg/es/asn/PlusSquareFilled';
import PlusSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/PlusSquareOutlined';
import PlusSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/PlusSquareTwoTone';
import PoundCircleFilledSvg from '@ant-design/icons-svg/es/asn/PoundCircleFilled';
import PoundCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/PoundCircleOutlined';
import PoundCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/PoundCircleTwoTone';
import PoundOutlinedSvg from '@ant-design/icons-svg/es/asn/PoundOutlined';
import PoweroffOutlinedSvg from '@ant-design/icons-svg/es/asn/PoweroffOutlined';
import PrinterFilledSvg from '@ant-design/icons-svg/es/asn/PrinterFilled';
import PrinterOutlinedSvg from '@ant-design/icons-svg/es/asn/PrinterOutlined';
import PrinterTwoToneSvg from '@ant-design/icons-svg/es/asn/PrinterTwoTone';
import ProfileFilledSvg from '@ant-design/icons-svg/es/asn/ProfileFilled';
import ProfileOutlinedSvg from '@ant-design/icons-svg/es/asn/ProfileOutlined';
import ProfileTwoToneSvg from '@ant-design/icons-svg/es/asn/ProfileTwoTone';
import ProjectFilledSvg from '@ant-design/icons-svg/es/asn/ProjectFilled';
import ProjectOutlinedSvg from '@ant-design/icons-svg/es/asn/ProjectOutlined';
import ProjectTwoToneSvg from '@ant-design/icons-svg/es/asn/ProjectTwoTone';
import PropertySafetyFilledSvg from '@ant-design/icons-svg/es/asn/PropertySafetyFilled';
import PropertySafetyOutlinedSvg from '@ant-design/icons-svg/es/asn/PropertySafetyOutlined';
import PropertySafetyTwoToneSvg from '@ant-design/icons-svg/es/asn/PropertySafetyTwoTone';
import PullRequestOutlinedSvg from '@ant-design/icons-svg/es/asn/PullRequestOutlined';
import PushpinFilledSvg from '@ant-design/icons-svg/es/asn/PushpinFilled';
import PushpinOutlinedSvg from '@ant-design/icons-svg/es/asn/PushpinOutlined';
import PushpinTwoToneSvg from '@ant-design/icons-svg/es/asn/PushpinTwoTone';
import QqCircleFilledSvg from '@ant-design/icons-svg/es/asn/QqCircleFilled';
import QqOutlinedSvg from '@ant-design/icons-svg/es/asn/QqOutlined';
import QqSquareFilledSvg from '@ant-design/icons-svg/es/asn/QqSquareFilled';
import QrcodeOutlinedSvg from '@ant-design/icons-svg/es/asn/QrcodeOutlined';
import QuestionCircleFilledSvg from '@ant-design/icons-svg/es/asn/QuestionCircleFilled';
import QuestionCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/QuestionCircleOutlined';
import QuestionCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/QuestionCircleTwoTone';
import QuestionOutlinedSvg from '@ant-design/icons-svg/es/asn/QuestionOutlined';
import RadarChartOutlinedSvg from '@ant-design/icons-svg/es/asn/RadarChartOutlined';
import RadiusBottomleftOutlinedSvg from '@ant-design/icons-svg/es/asn/RadiusBottomleftOutlined';
import RadiusBottomrightOutlinedSvg from '@ant-design/icons-svg/es/asn/RadiusBottomrightOutlined';
import RadiusSettingOutlinedSvg from '@ant-design/icons-svg/es/asn/RadiusSettingOutlined';
import RadiusUpleftOutlinedSvg from '@ant-design/icons-svg/es/asn/RadiusUpleftOutlined';
import RadiusUprightOutlinedSvg from '@ant-design/icons-svg/es/asn/RadiusUprightOutlined';
import ReadFilledSvg from '@ant-design/icons-svg/es/asn/ReadFilled';
import ReadOutlinedSvg from '@ant-design/icons-svg/es/asn/ReadOutlined';
import ReconciliationFilledSvg from '@ant-design/icons-svg/es/asn/ReconciliationFilled';
import ReconciliationOutlinedSvg from '@ant-design/icons-svg/es/asn/ReconciliationOutlined';
import ReconciliationTwoToneSvg from '@ant-design/icons-svg/es/asn/ReconciliationTwoTone';
import RedEnvelopeFilledSvg from '@ant-design/icons-svg/es/asn/RedEnvelopeFilled';
import RedEnvelopeOutlinedSvg from '@ant-design/icons-svg/es/asn/RedEnvelopeOutlined';
import RedEnvelopeTwoToneSvg from '@ant-design/icons-svg/es/asn/RedEnvelopeTwoTone';
import RedditCircleFilledSvg from '@ant-design/icons-svg/es/asn/RedditCircleFilled';
import RedditOutlinedSvg from '@ant-design/icons-svg/es/asn/RedditOutlined';
import RedditSquareFilledSvg from '@ant-design/icons-svg/es/asn/RedditSquareFilled';
import RedoOutlinedSvg from '@ant-design/icons-svg/es/asn/RedoOutlined';
import ReloadOutlinedSvg from '@ant-design/icons-svg/es/asn/ReloadOutlined';
import RestFilledSvg from '@ant-design/icons-svg/es/asn/RestFilled';
import RestOutlinedSvg from '@ant-design/icons-svg/es/asn/RestOutlined';
import RestTwoToneSvg from '@ant-design/icons-svg/es/asn/RestTwoTone';
import RetweetOutlinedSvg from '@ant-design/icons-svg/es/asn/RetweetOutlined';
import RightCircleFilledSvg from '@ant-design/icons-svg/es/asn/RightCircleFilled';
import RightCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/RightCircleOutlined';
import RightCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/RightCircleTwoTone';
import RightOutlinedSvg from '@ant-design/icons-svg/es/asn/RightOutlined';
import RightSquareFilledSvg from '@ant-design/icons-svg/es/asn/RightSquareFilled';
import RightSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/RightSquareOutlined';
import RightSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/RightSquareTwoTone';
import RiseOutlinedSvg from '@ant-design/icons-svg/es/asn/RiseOutlined';
import RobotFilledSvg from '@ant-design/icons-svg/es/asn/RobotFilled';
import RobotOutlinedSvg from '@ant-design/icons-svg/es/asn/RobotOutlined';
import RocketFilledSvg from '@ant-design/icons-svg/es/asn/RocketFilled';
import RocketOutlinedSvg from '@ant-design/icons-svg/es/asn/RocketOutlined';
import RocketTwoToneSvg from '@ant-design/icons-svg/es/asn/RocketTwoTone';
import RollbackOutlinedSvg from '@ant-design/icons-svg/es/asn/RollbackOutlined';
import RotateLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/RotateLeftOutlined';
import RotateRightOutlinedSvg from '@ant-design/icons-svg/es/asn/RotateRightOutlined';
import SafetyCertificateFilledSvg from '@ant-design/icons-svg/es/asn/SafetyCertificateFilled';
import SafetyCertificateOutlinedSvg from '@ant-design/icons-svg/es/asn/SafetyCertificateOutlined';
import SafetyCertificateTwoToneSvg from '@ant-design/icons-svg/es/asn/SafetyCertificateTwoTone';
import SafetyOutlinedSvg from '@ant-design/icons-svg/es/asn/SafetyOutlined';
import SaveFilledSvg from '@ant-design/icons-svg/es/asn/SaveFilled';
import SaveOutlinedSvg from '@ant-design/icons-svg/es/asn/SaveOutlined';
import SaveTwoToneSvg from '@ant-design/icons-svg/es/asn/SaveTwoTone';
import ScanOutlinedSvg from '@ant-design/icons-svg/es/asn/ScanOutlined';
import ScheduleFilledSvg from '@ant-design/icons-svg/es/asn/ScheduleFilled';
import ScheduleOutlinedSvg from '@ant-design/icons-svg/es/asn/ScheduleOutlined';
import ScheduleTwoToneSvg from '@ant-design/icons-svg/es/asn/ScheduleTwoTone';
import ScissorOutlinedSvg from '@ant-design/icons-svg/es/asn/ScissorOutlined';
import SearchOutlinedSvg from '@ant-design/icons-svg/es/asn/SearchOutlined';
import SecurityScanFilledSvg from '@ant-design/icons-svg/es/asn/SecurityScanFilled';
import SecurityScanOutlinedSvg from '@ant-design/icons-svg/es/asn/SecurityScanOutlined';
import SecurityScanTwoToneSvg from '@ant-design/icons-svg/es/asn/SecurityScanTwoTone';
import SelectOutlinedSvg from '@ant-design/icons-svg/es/asn/SelectOutlined';
import SendOutlinedSvg from '@ant-design/icons-svg/es/asn/SendOutlined';
import SettingFilledSvg from '@ant-design/icons-svg/es/asn/SettingFilled';
import SettingOutlinedSvg from '@ant-design/icons-svg/es/asn/SettingOutlined';
import SettingTwoToneSvg from '@ant-design/icons-svg/es/asn/SettingTwoTone';
import ShakeOutlinedSvg from '@ant-design/icons-svg/es/asn/ShakeOutlined';
import ShareAltOutlinedSvg from '@ant-design/icons-svg/es/asn/ShareAltOutlined';
import ShopFilledSvg from '@ant-design/icons-svg/es/asn/ShopFilled';
import ShopOutlinedSvg from '@ant-design/icons-svg/es/asn/ShopOutlined';
import ShopTwoToneSvg from '@ant-design/icons-svg/es/asn/ShopTwoTone';
import ShoppingCartOutlinedSvg from '@ant-design/icons-svg/es/asn/ShoppingCartOutlined';
import ShoppingFilledSvg from '@ant-design/icons-svg/es/asn/ShoppingFilled';
import ShoppingOutlinedSvg from '@ant-design/icons-svg/es/asn/ShoppingOutlined';
import ShoppingTwoToneSvg from '@ant-design/icons-svg/es/asn/ShoppingTwoTone';
import ShrinkOutlinedSvg from '@ant-design/icons-svg/es/asn/ShrinkOutlined';
import SignalFilledSvg from '@ant-design/icons-svg/es/asn/SignalFilled';
import SisternodeOutlinedSvg from '@ant-design/icons-svg/es/asn/SisternodeOutlined';
import SketchCircleFilledSvg from '@ant-design/icons-svg/es/asn/SketchCircleFilled';
import SketchOutlinedSvg from '@ant-design/icons-svg/es/asn/SketchOutlined';
import SketchSquareFilledSvg from '@ant-design/icons-svg/es/asn/SketchSquareFilled';
import SkinFilledSvg from '@ant-design/icons-svg/es/asn/SkinFilled';
import SkinOutlinedSvg from '@ant-design/icons-svg/es/asn/SkinOutlined';
import SkinTwoToneSvg from '@ant-design/icons-svg/es/asn/SkinTwoTone';
import SkypeFilledSvg from '@ant-design/icons-svg/es/asn/SkypeFilled';
import SkypeOutlinedSvg from '@ant-design/icons-svg/es/asn/SkypeOutlined';
import SlackCircleFilledSvg from '@ant-design/icons-svg/es/asn/SlackCircleFilled';
import SlackOutlinedSvg from '@ant-design/icons-svg/es/asn/SlackOutlined';
import SlackSquareFilledSvg from '@ant-design/icons-svg/es/asn/SlackSquareFilled';
import SlackSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/SlackSquareOutlined';
import SlidersFilledSvg from '@ant-design/icons-svg/es/asn/SlidersFilled';
import SlidersOutlinedSvg from '@ant-design/icons-svg/es/asn/SlidersOutlined';
import SlidersTwoToneSvg from '@ant-design/icons-svg/es/asn/SlidersTwoTone';
import SmallDashOutlinedSvg from '@ant-design/icons-svg/es/asn/SmallDashOutlined';
import SmileFilledSvg from '@ant-design/icons-svg/es/asn/SmileFilled';
import SmileOutlinedSvg from '@ant-design/icons-svg/es/asn/SmileOutlined';
import SmileTwoToneSvg from '@ant-design/icons-svg/es/asn/SmileTwoTone';
import SnippetsFilledSvg from '@ant-design/icons-svg/es/asn/SnippetsFilled';
import SnippetsOutlinedSvg from '@ant-design/icons-svg/es/asn/SnippetsOutlined';
import SnippetsTwoToneSvg from '@ant-design/icons-svg/es/asn/SnippetsTwoTone';
import SolutionOutlinedSvg from '@ant-design/icons-svg/es/asn/SolutionOutlined';
import SortAscendingOutlinedSvg from '@ant-design/icons-svg/es/asn/SortAscendingOutlined';
import SortDescendingOutlinedSvg from '@ant-design/icons-svg/es/asn/SortDescendingOutlined';
import SoundFilledSvg from '@ant-design/icons-svg/es/asn/SoundFilled';
import SoundOutlinedSvg from '@ant-design/icons-svg/es/asn/SoundOutlined';
import SoundTwoToneSvg from '@ant-design/icons-svg/es/asn/SoundTwoTone';
import SplitCellsOutlinedSvg from '@ant-design/icons-svg/es/asn/SplitCellsOutlined';
import StarFilledSvg from '@ant-design/icons-svg/es/asn/StarFilled';
import StarOutlinedSvg from '@ant-design/icons-svg/es/asn/StarOutlined';
import StarTwoToneSvg from '@ant-design/icons-svg/es/asn/StarTwoTone';
import StepBackwardFilledSvg from '@ant-design/icons-svg/es/asn/StepBackwardFilled';
import StepBackwardOutlinedSvg from '@ant-design/icons-svg/es/asn/StepBackwardOutlined';
import StepForwardFilledSvg from '@ant-design/icons-svg/es/asn/StepForwardFilled';
import StepForwardOutlinedSvg from '@ant-design/icons-svg/es/asn/StepForwardOutlined';
import StockOutlinedSvg from '@ant-design/icons-svg/es/asn/StockOutlined';
import StopFilledSvg from '@ant-design/icons-svg/es/asn/StopFilled';
import StopOutlinedSvg from '@ant-design/icons-svg/es/asn/StopOutlined';
import StopTwoToneSvg from '@ant-design/icons-svg/es/asn/StopTwoTone';
import StrikethroughOutlinedSvg from '@ant-design/icons-svg/es/asn/StrikethroughOutlined';
import SubnodeOutlinedSvg from '@ant-design/icons-svg/es/asn/SubnodeOutlined';
import SwapLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/SwapLeftOutlined';
import SwapOutlinedSvg from '@ant-design/icons-svg/es/asn/SwapOutlined';
import SwapRightOutlinedSvg from '@ant-design/icons-svg/es/asn/SwapRightOutlined';
import SwitcherFilledSvg from '@ant-design/icons-svg/es/asn/SwitcherFilled';
import SwitcherOutlinedSvg from '@ant-design/icons-svg/es/asn/SwitcherOutlined';
import SwitcherTwoToneSvg from '@ant-design/icons-svg/es/asn/SwitcherTwoTone';
import SyncOutlinedSvg from '@ant-design/icons-svg/es/asn/SyncOutlined';
import TableOutlinedSvg from '@ant-design/icons-svg/es/asn/TableOutlined';
import TabletFilledSvg from '@ant-design/icons-svg/es/asn/TabletFilled';
import TabletOutlinedSvg from '@ant-design/icons-svg/es/asn/TabletOutlined';
import TabletTwoToneSvg from '@ant-design/icons-svg/es/asn/TabletTwoTone';
import TagFilledSvg from '@ant-design/icons-svg/es/asn/TagFilled';
import TagOutlinedSvg from '@ant-design/icons-svg/es/asn/TagOutlined';
import TagTwoToneSvg from '@ant-design/icons-svg/es/asn/TagTwoTone';
import TagsFilledSvg from '@ant-design/icons-svg/es/asn/TagsFilled';
import TagsOutlinedSvg from '@ant-design/icons-svg/es/asn/TagsOutlined';
import TagsTwoToneSvg from '@ant-design/icons-svg/es/asn/TagsTwoTone';
import TaobaoCircleFilledSvg from '@ant-design/icons-svg/es/asn/TaobaoCircleFilled';
import TaobaoCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/TaobaoCircleOutlined';
import TaobaoOutlinedSvg from '@ant-design/icons-svg/es/asn/TaobaoOutlined';
import TaobaoSquareFilledSvg from '@ant-design/icons-svg/es/asn/TaobaoSquareFilled';
import TeamOutlinedSvg from '@ant-design/icons-svg/es/asn/TeamOutlined';
import ThunderboltFilledSvg from '@ant-design/icons-svg/es/asn/ThunderboltFilled';
import ThunderboltOutlinedSvg from '@ant-design/icons-svg/es/asn/ThunderboltOutlined';
import ThunderboltTwoToneSvg from '@ant-design/icons-svg/es/asn/ThunderboltTwoTone';
import ToTopOutlinedSvg from '@ant-design/icons-svg/es/asn/ToTopOutlined';
import ToolFilledSvg from '@ant-design/icons-svg/es/asn/ToolFilled';
import ToolOutlinedSvg from '@ant-design/icons-svg/es/asn/ToolOutlined';
import ToolTwoToneSvg from '@ant-design/icons-svg/es/asn/ToolTwoTone';
import TrademarkCircleFilledSvg from '@ant-design/icons-svg/es/asn/TrademarkCircleFilled';
import TrademarkCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/TrademarkCircleOutlined';
import TrademarkCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/TrademarkCircleTwoTone';
import TrademarkOutlinedSvg from '@ant-design/icons-svg/es/asn/TrademarkOutlined';
import TransactionOutlinedSvg from '@ant-design/icons-svg/es/asn/TransactionOutlined';
import TranslationOutlinedSvg from '@ant-design/icons-svg/es/asn/TranslationOutlined';
import TrophyFilledSvg from '@ant-design/icons-svg/es/asn/TrophyFilled';
import TrophyOutlinedSvg from '@ant-design/icons-svg/es/asn/TrophyOutlined';
import TrophyTwoToneSvg from '@ant-design/icons-svg/es/asn/TrophyTwoTone';
import TwitterCircleFilledSvg from '@ant-design/icons-svg/es/asn/TwitterCircleFilled';
import TwitterOutlinedSvg from '@ant-design/icons-svg/es/asn/TwitterOutlined';
import TwitterSquareFilledSvg from '@ant-design/icons-svg/es/asn/TwitterSquareFilled';
import UnderlineOutlinedSvg from '@ant-design/icons-svg/es/asn/UnderlineOutlined';
import UndoOutlinedSvg from '@ant-design/icons-svg/es/asn/UndoOutlined';
import UngroupOutlinedSvg from '@ant-design/icons-svg/es/asn/UngroupOutlined';
import UnlockFilledSvg from '@ant-design/icons-svg/es/asn/UnlockFilled';
import UnlockOutlinedSvg from '@ant-design/icons-svg/es/asn/UnlockOutlined';
import UnlockTwoToneSvg from '@ant-design/icons-svg/es/asn/UnlockTwoTone';
import UnorderedListOutlinedSvg from '@ant-design/icons-svg/es/asn/UnorderedListOutlined';
import UpCircleFilledSvg from '@ant-design/icons-svg/es/asn/UpCircleFilled';
import UpCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/UpCircleOutlined';
import UpCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/UpCircleTwoTone';
import UpOutlinedSvg from '@ant-design/icons-svg/es/asn/UpOutlined';
import UpSquareFilledSvg from '@ant-design/icons-svg/es/asn/UpSquareFilled';
import UpSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/UpSquareOutlined';
import UpSquareTwoToneSvg from '@ant-design/icons-svg/es/asn/UpSquareTwoTone';
import UploadOutlinedSvg from '@ant-design/icons-svg/es/asn/UploadOutlined';
import UsbFilledSvg from '@ant-design/icons-svg/es/asn/UsbFilled';
import UsbOutlinedSvg from '@ant-design/icons-svg/es/asn/UsbOutlined';
import UsbTwoToneSvg from '@ant-design/icons-svg/es/asn/UsbTwoTone';
import UserAddOutlinedSvg from '@ant-design/icons-svg/es/asn/UserAddOutlined';
import UserDeleteOutlinedSvg from '@ant-design/icons-svg/es/asn/UserDeleteOutlined';
import UserOutlinedSvg from '@ant-design/icons-svg/es/asn/UserOutlined';
import UserSwitchOutlinedSvg from '@ant-design/icons-svg/es/asn/UserSwitchOutlined';
import UsergroupAddOutlinedSvg from '@ant-design/icons-svg/es/asn/UsergroupAddOutlined';
import UsergroupDeleteOutlinedSvg from '@ant-design/icons-svg/es/asn/UsergroupDeleteOutlined';
import VerifiedOutlinedSvg from '@ant-design/icons-svg/es/asn/VerifiedOutlined';
import VerticalAlignBottomOutlinedSvg from '@ant-design/icons-svg/es/asn/VerticalAlignBottomOutlined';
import VerticalAlignMiddleOutlinedSvg from '@ant-design/icons-svg/es/asn/VerticalAlignMiddleOutlined';
import VerticalAlignTopOutlinedSvg from '@ant-design/icons-svg/es/asn/VerticalAlignTopOutlined';
import VerticalLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/VerticalLeftOutlined';
import VerticalRightOutlinedSvg from '@ant-design/icons-svg/es/asn/VerticalRightOutlined';
import VideoCameraAddOutlinedSvg from '@ant-design/icons-svg/es/asn/VideoCameraAddOutlined';
import VideoCameraFilledSvg from '@ant-design/icons-svg/es/asn/VideoCameraFilled';
import VideoCameraOutlinedSvg from '@ant-design/icons-svg/es/asn/VideoCameraOutlined';
import VideoCameraTwoToneSvg from '@ant-design/icons-svg/es/asn/VideoCameraTwoTone';
import WalletFilledSvg from '@ant-design/icons-svg/es/asn/WalletFilled';
import WalletOutlinedSvg from '@ant-design/icons-svg/es/asn/WalletOutlined';
import WalletTwoToneSvg from '@ant-design/icons-svg/es/asn/WalletTwoTone';
import WarningFilledSvg from '@ant-design/icons-svg/es/asn/WarningFilled';
import WarningOutlinedSvg from '@ant-design/icons-svg/es/asn/WarningOutlined';
import WarningTwoToneSvg from '@ant-design/icons-svg/es/asn/WarningTwoTone';
import WechatFilledSvg from '@ant-design/icons-svg/es/asn/WechatFilled';
import WechatOutlinedSvg from '@ant-design/icons-svg/es/asn/WechatOutlined';
import WeiboCircleFilledSvg from '@ant-design/icons-svg/es/asn/WeiboCircleFilled';
import WeiboCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/WeiboCircleOutlined';
import WeiboOutlinedSvg from '@ant-design/icons-svg/es/asn/WeiboOutlined';
import WeiboSquareFilledSvg from '@ant-design/icons-svg/es/asn/WeiboSquareFilled';
import WeiboSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/WeiboSquareOutlined';
import WhatsAppOutlinedSvg from '@ant-design/icons-svg/es/asn/WhatsAppOutlined';
import WifiOutlinedSvg from '@ant-design/icons-svg/es/asn/WifiOutlined';
import WindowsFilledSvg from '@ant-design/icons-svg/es/asn/WindowsFilled';
import WindowsOutlinedSvg from '@ant-design/icons-svg/es/asn/WindowsOutlined';
import WomanOutlinedSvg from '@ant-design/icons-svg/es/asn/WomanOutlined';
import YahooFilledSvg from '@ant-design/icons-svg/es/asn/YahooFilled';
import YahooOutlinedSvg from '@ant-design/icons-svg/es/asn/YahooOutlined';
import YoutubeFilledSvg from '@ant-design/icons-svg/es/asn/YoutubeFilled';
import YoutubeOutlinedSvg from '@ant-design/icons-svg/es/asn/YoutubeOutlined';
import YuqueFilledSvg from '@ant-design/icons-svg/es/asn/YuqueFilled';
import YuqueOutlinedSvg from '@ant-design/icons-svg/es/asn/YuqueOutlined';
import ZhihuCircleFilledSvg from '@ant-design/icons-svg/es/asn/ZhihuCircleFilled';
import ZhihuOutlinedSvg from '@ant-design/icons-svg/es/asn/ZhihuOutlined';
import ZhihuSquareFilledSvg from '@ant-design/icons-svg/es/asn/ZhihuSquareFilled';
import ZoomInOutlinedSvg from '@ant-design/icons-svg/es/asn/ZoomInOutlined';
import ZoomOutOutlinedSvg from '@ant-design/icons-svg/es/asn/ZoomOutOutlined';
import { Table } from 'antd';
import { findDOMNode } from 'react-dom';
import require$$1 from 'object-assign';

function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = { exports: {} };

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === 'object') {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }

      return classes.join(' ');
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);

var classNames = classnames.exports;

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '.y-btn{background-image:none;background:#fff;border:1px solid #d9d9d9;border-radius:2px;box-shadow:0 2px #00000004;color:#000000d9;cursor:pointer;display:inline-block;font-size:14px;font-weight:400;height:32px;padding:4px 15px;position:relative;text-align:center;touch-action:manipulation;transition:all .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.y-btn-primary{background:#1890ff;border-color:#1890ff;box-shadow:0 2px #0000000b;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.12)}';
styleInject(css_248z);

var PREFIX = 'y';

var Button = function Button(props) {
  var cName = ''.concat(PREFIX, '-btn');
  return React__default.createElement(
    'button',
    {
      className: classNames(cName, cName + '-' + (props.type || 'default')),
    },
    props.children,
  );
};

var keys$1 = { exports: {} };

(function (module) {
  module.exports = require$$0;
})(keys$1);

var _Object$keys$1 = /*@__PURE__*/ getDefaultExportFromCjs(keys$1.exports);

var getOwnPropertySymbols$1 = { exports: {} };

(function (module) {
  module.exports = require$$0$1;
})(getOwnPropertySymbols$1);

var _Object$getOwnPropertySymbols$1 = /*@__PURE__*/ getDefaultExportFromCjs(
  getOwnPropertySymbols$1.exports,
);

var filter = { exports: {} };

(function (module) {
  module.exports = require$$0$2;
})(filter);

var _filterInstanceProperty = /*@__PURE__*/ getDefaultExportFromCjs(filter.exports);

var getOwnPropertyDescriptor = { exports: {} };

(function (module) {
  module.exports = require$$0$3;
})(getOwnPropertyDescriptor);

var _Object$getOwnPropertyDescriptor = /*@__PURE__*/ getDefaultExportFromCjs(
  getOwnPropertyDescriptor.exports,
);

var getOwnPropertyDescriptors = { exports: {} };

(function (module) {
  module.exports = require$$0$4;
})(getOwnPropertyDescriptors);

var _Object$getOwnPropertyDescriptors = /*@__PURE__*/ getDefaultExportFromCjs(
  getOwnPropertyDescriptors.exports,
);

var defineProperties = { exports: {} };

(function (module) {
  module.exports = require$$0$5;
})(defineProperties);

var _Object$defineProperties = /*@__PURE__*/ getDefaultExportFromCjs(defineProperties.exports);

var defineProperty$1 = { exports: {} };

(function (module) {
  module.exports = require$$0$6;
})(defineProperty$1);

var _Object$defineProperty$1 = /*@__PURE__*/ getDefaultExportFromCjs(defineProperty$1.exports);

var promise = { exports: {} };

(function (module) {
  module.exports = require$$0$7;
})(promise);

var _Promise = /*@__PURE__*/ getDefaultExportFromCjs(promise.exports);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }

      _next(undefined);
    });
  };
}

var isArray = { exports: {} };

(function (module) {
  module.exports = require$$0$8;
})(isArray);

var _Array$isArray = /*@__PURE__*/ getDefaultExportFromCjs(isArray.exports);

function _arrayWithHoles$1(arr) {
  if (_Array$isArray(arr)) return arr;
}

var symbol = { exports: {} };

(function (module) {
  module.exports = require$$0$9;
})(symbol);

var _Symbol = /*@__PURE__*/ getDefaultExportFromCjs(symbol.exports);

var getIteratorMethod = { exports: {} };

(function (module) {
  module.exports = require$$0$a;
})(getIteratorMethod);

var _getIteratorMethod = /*@__PURE__*/ getDefaultExportFromCjs(getIteratorMethod.exports);

function _iterableToArrayLimit$1(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof _Symbol !== 'undefined' && _getIteratorMethod(arr)) || arr['@@iterator'];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var slice = { exports: {} };

(function (module) {
  module.exports = require$$0$b;
})(slice);

var _sliceInstanceProperty = /*@__PURE__*/ getDefaultExportFromCjs(slice.exports);

var from = { exports: {} };

(function (module) {
  module.exports = require$$0$c;
})(from);

var _Array$from = /*@__PURE__*/ getDefaultExportFromCjs(from.exports);

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  var _context;

  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray$1(o, minLen);

  var n = _sliceInstanceProperty((_context = Object.prototype.toString.call(o))).call(
    _context,
    8,
    -1,
  );

  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return _Array$from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest$1() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _slicedToArray$1(arr, i) {
  return (
    _arrayWithHoles$1(arr) ||
    _iterableToArrayLimit$1(arr, i) ||
    _unsupportedIterableToArray$1(arr, i) ||
    _nonIterableRest$1()
  );
}

var getOwnPropertySymbols = { exports: {} };

(function (module) {
  module.exports = require$$0$d;
})(getOwnPropertySymbols);

var _Object$getOwnPropertySymbols = /*@__PURE__*/ getDefaultExportFromCjs(
  getOwnPropertySymbols.exports,
);

var indexOf = { exports: {} };

(function (module) {
  module.exports = require$$0$e;
})(indexOf);

var _indexOfInstanceProperty = /*@__PURE__*/ getDefaultExportFromCjs(indexOf.exports);

var keys = { exports: {} };

(function (module) {
  module.exports = require$$0$f;
})(keys);

var _Object$keys = /*@__PURE__*/ getDefaultExportFromCjs(keys.exports);

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _Object$keys(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (_indexOfInstanceProperty(excluded).call(excluded, key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;

  if (_Object$getOwnPropertySymbols) {
    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (_indexOfInstanceProperty(excluded).call(excluded, key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var defineProperty = { exports: {} };

(function (module) {
  module.exports = require$$0$g;
})(defineProperty);

var _Object$defineProperty = /*@__PURE__*/ getDefaultExportFromCjs(defineProperty.exports);

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var regeneratorRuntime$1 = { exports: {} };

var _typeof$1 = { exports: {} };

var iterator = { exports: {} };

(function (module) {
  module.exports = require$$0$h;
})(iterator);

(function (module) {
  var _Symbol = symbol.exports;

  var _Symbol$iterator = iterator.exports;

  function _typeof(obj) {
    '@babel/helpers - typeof';

    return (
      ((module.exports = _typeof =
        'function' == typeof _Symbol && 'symbol' == typeof _Symbol$iterator
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                'function' == typeof _Symbol &&
                obj.constructor === _Symbol &&
                obj !== _Symbol.prototype
                ? 'symbol'
                : typeof obj;
            }),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports)),
      _typeof(obj)
    );
  }

  (module.exports = _typeof),
    (module.exports.__esModule = true),
    (module.exports['default'] = module.exports);
})(_typeof$1);

var create = { exports: {} };

(function (module) {
  module.exports = require$$0$i;
})(create);

var getPrototypeOf = { exports: {} };

(function (module) {
  module.exports = require$$0$j;
})(getPrototypeOf);

var forEach$1 = { exports: {} };

(function (module) {
  module.exports = require$$0$k;
})(forEach$1);

var setPrototypeOf = { exports: {} };

(function (module) {
  module.exports = require$$0$l;
})(setPrototypeOf);

var reverse = { exports: {} };

(function (module) {
  module.exports = require$$0$m;
})(reverse);

(function (module) {
  var _typeof = _typeof$1.exports['default'];

  var _Symbol = symbol.exports;

  var _Object$defineProperty = defineProperty.exports;

  var _Object$create = create.exports;

  var _Object$getPrototypeOf = getPrototypeOf.exports;

  var _forEachInstanceProperty = forEach$1.exports;

  var _Object$setPrototypeOf = setPrototypeOf.exports;

  var _Promise = promise.exports;

  var _reverseInstanceProperty = reverse.exports;

  var _sliceInstanceProperty = slice.exports;

  function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

    (module.exports = _regeneratorRuntime =
      function _regeneratorRuntime() {
        return exports;
      }),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = 'function' == typeof _Symbol ? _Symbol : {},
      iteratorSymbol = $Symbol.iterator || '@@iterator',
      asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
      toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

    function define(obj, key, value) {
      return (
        _Object$defineProperty(obj, key, {
          value: value,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        obj[key]
      );
    }

    try {
      define({}, '');
    } catch (err) {
      define = function define(obj, key, value) {
        return (obj[key] = value);
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = _Object$create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);

      return (
        (generator._invoke = (function (innerFn, self, context) {
          var state = 'suspendedStart';
          return function (method, arg) {
            if ('executing' === state) throw new Error('Generator is already running');

            if ('completed' === state) {
              if ('throw' === method) throw arg;
              return doneResult();
            }

            for (context.method = method, context.arg = arg; ; ) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if ('next' === context.method) context.sent = context._sent = context.arg;
              else if ('throw' === context.method) {
                if ('suspendedStart' === state) throw ((state = 'completed'), context.arg);
                context.dispatchException(context.arg);
              } else 'return' === context.method && context.abrupt('return', context.arg);
              state = 'executing';
              var record = tryCatch(innerFn, self, context);

              if ('normal' === record.type) {
                if (
                  ((state = context.done ? 'completed' : 'suspendedYield'),
                  record.arg === ContinueSentinel)
                )
                  continue;
                return {
                  value: record.arg,
                  done: context.done,
                };
              }

              'throw' === record.type &&
                ((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg));
            }
          };
        })(innerFn, self, context)),
        generator
      );
    }

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: 'normal',
          arg: fn.call(obj, arg),
        };
      } catch (err) {
        return {
          type: 'throw',
          arg: err,
        };
      }
    }

    exports.wrap = wrap;
    var ContinueSentinel = {};

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {}

    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = _Object$getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
      (IteratorPrototype = NativeIteratorPrototype);

    var Gp =
      (GeneratorFunctionPrototype.prototype =
      Generator.prototype =
        _Object$create(IteratorPrototype));

    function defineIteratorMethods(prototype) {
      var _context;

      _forEachInstanceProperty((_context = ['next', 'throw', 'return'])).call(
        _context,
        function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        },
      );
    }

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if ('throw' !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && 'object' == _typeof(value) && hasOwn.call(value, '__await')
            ? PromiseImpl.resolve(value.__await).then(
                function (value) {
                  invoke('next', value, resolve, reject);
                },
                function (err) {
                  invoke('throw', err, resolve, reject);
                },
              )
            : PromiseImpl.resolve(value).then(
                function (unwrapped) {
                  (result.value = unwrapped), resolve(result);
                },
                function (error) {
                  return invoke('throw', error, resolve, reject);
                },
              );
        }

        reject(record.arg);
      }

      var previousPromise;

      this._invoke = function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return (previousPromise = previousPromise
          ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      };
    }

    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (undefined === method) {
        if (((context.delegate = null), 'throw' === context.method)) {
          if (
            delegate.iterator['return'] &&
            ((context.method = 'return'),
            (context.arg = undefined),
            maybeInvokeDelegate(delegate, context),
            'throw' === context.method)
          )
            return ContinueSentinel;
          (context.method = 'throw'),
            (context.arg = new TypeError("The iterator does not provide a 'throw' method"));
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);
      if ('throw' === record.type)
        return (
          (context.method = 'throw'),
          (context.arg = record.arg),
          (context.delegate = null),
          ContinueSentinel
        );
      var info = record.arg;
      return info
        ? info.done
          ? ((context[delegate.resultName] = info.value),
            (context.next = delegate.nextLoc),
            'return' !== context.method && ((context.method = 'next'), (context.arg = undefined)),
            (context.delegate = null),
            ContinueSentinel)
          : info
        : ((context.method = 'throw'),
          (context.arg = new TypeError('iterator result is not an object')),
          (context.delegate = null),
          ContinueSentinel);
    }

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0],
      };
      1 in locs && (entry.catchLoc = locs[1]),
        2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
        this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      (record.type = 'normal'), delete record.arg, (entry.completion = record);
    }

    function Context(tryLocsList) {
      (this.tryEntries = [
        {
          tryLoc: 'root',
        },
      ]),
        _forEachInstanceProperty(tryLocsList).call(tryLocsList, pushTryEntry, this),
        this.reset(!0);
    }

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ('function' == typeof iterable.next) return iterable;

        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length; ) {
                if (hasOwn.call(iterable, i))
                  return (next.value = iterable[i]), (next.done = !1), next;
              }

              return (next.value = undefined), (next.done = !0), next;
            };

          return (next.next = next);
        }
      }

      return {
        next: doneResult,
      };
    }

    function doneResult() {
      return {
        value: undefined,
        done: !0,
      };
    }

    return (
      (GeneratorFunction.prototype = GeneratorFunctionPrototype),
      define(Gp, 'constructor', GeneratorFunctionPrototype),
      define(GeneratorFunctionPrototype, 'constructor', GeneratorFunction),
      (GeneratorFunction.displayName = define(
        GeneratorFunctionPrototype,
        toStringTagSymbol,
        'GeneratorFunction',
      )),
      (exports.isGeneratorFunction = function (genFun) {
        var ctor = 'function' == typeof genFun && genFun.constructor;
        return (
          !!ctor &&
          (ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name))
        );
      }),
      (exports.mark = function (genFun) {
        return (
          _Object$setPrototypeOf
            ? _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype)
            : ((genFun.__proto__ = GeneratorFunctionPrototype),
              define(genFun, toStringTagSymbol, 'GeneratorFunction')),
          (genFun.prototype = _Object$create(Gp)),
          genFun
        );
      }),
      (exports.awrap = function (arg) {
        return {
          __await: arg,
        };
      }),
      defineIteratorMethods(AsyncIterator.prototype),
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      }),
      (exports.AsyncIterator = AsyncIterator),
      (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = _Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn)
          ? iter
          : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
      }),
      defineIteratorMethods(Gp),
      define(Gp, toStringTagSymbol, 'Generator'),
      define(Gp, iteratorSymbol, function () {
        return this;
      }),
      define(Gp, 'toString', function () {
        return '[object Generator]';
      }),
      (exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        return (
          _reverseInstanceProperty(keys).call(keys),
          function next() {
            for (; keys.length; ) {
              var key = keys.pop();
              if (key in object) return (next.value = key), (next.done = !1), next;
            }

            return (next.done = !0), next;
          }
        );
      }),
      (exports.values = values),
      (Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          var _context2;

          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = undefined),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = undefined),
            _forEachInstanceProperty((_context2 = this.tryEntries)).call(_context2, resetTryEntry),
            !skipTempReset)
          )
            for (var name in this) {
              't' === name.charAt(0) &&
                hasOwn.call(this, name) &&
                !isNaN(+_sliceInstanceProperty(name).call(name, 1)) &&
                (this[name] = undefined);
            }
        },
        stop: function stop() {
          this.done = !0;
          var rootRecord = this.tryEntries[0].completion;
          if ('throw' === rootRecord.type) throw rootRecord.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) throw exception;
          var context = this;

          function handle(loc, caught) {
            return (
              (record.type = 'throw'),
              (record.arg = exception),
              (context.next = loc),
              caught && ((context.method = 'next'), (context.arg = undefined)),
              !!caught
            );
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i],
              record = entry.completion;
            if ('root' === entry.tryLoc) return handle('end');

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, 'catchLoc'),
                hasFinally = hasOwn.call(entry, 'finallyLoc');

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              } else {
                if (!hasFinally) throw new Error('try statement without catch or finally');
                if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (
              entry.tryLoc <= this.prev &&
              hasOwn.call(entry, 'finallyLoc') &&
              this.prev < entry.finallyLoc
            ) {
              var finallyEntry = entry;
              break;
            }
          }

          finallyEntry &&
            ('break' === type || 'continue' === type) &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc &&
            (finallyEntry = null);
          var record = finallyEntry ? finallyEntry.completion : {};
          return (
            (record.type = type),
            (record.arg = arg),
            finallyEntry
              ? ((this.method = 'next'), (this.next = finallyEntry.finallyLoc), ContinueSentinel)
              : this.complete(record)
          );
        },
        complete: function complete(record, afterLoc) {
          if ('throw' === record.type) throw record.arg;
          return (
            'break' === record.type || 'continue' === record.type
              ? (this.next = record.arg)
              : 'return' === record.type
              ? ((this.rval = this.arg = record.arg), (this.method = 'return'), (this.next = 'end'))
              : 'normal' === record.type && afterLoc && (this.next = afterLoc),
            ContinueSentinel
          );
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc)
              return (
                this.complete(entry.completion, entry.afterLoc),
                resetTryEntry(entry),
                ContinueSentinel
              );
          }
        },
        catch: function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if ('throw' === record.type) {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          }

          throw new Error('illegal catch attempt');
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          return (
            (this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc,
            }),
            'next' === this.method && (this.arg = undefined),
            ContinueSentinel
          );
        },
      }),
      exports
    );
  }

  (module.exports = _regeneratorRuntime),
    (module.exports.__esModule = true),
    (module.exports['default'] = module.exports);
})(regeneratorRuntime$1);

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntime$1.exports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === 'object') {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function('r', 'regeneratorRuntime = r')(runtime);
  }
}

var forEach = { exports: {} };

(function (module) {
  module.exports = require$$0$n;
})(forEach);

var _forEachInstanceProperty = /*@__PURE__*/ getDefaultExportFromCjs(forEach.exports);

var find = { exports: {} };

(function (module) {
  module.exports = require$$0$o;
})(find);

var _findInstanceProperty = /*@__PURE__*/ getDefaultExportFromCjs(find.exports);

var concat = { exports: {} };

(function (module) {
  module.exports = require$$0$p;
})(concat);

var _concatInstanceProperty = /*@__PURE__*/ getDefaultExportFromCjs(concat.exports);

var map = { exports: {} };

(function (module) {
  module.exports = require$$0$q;
})(map);

var _mapInstanceProperty = /*@__PURE__*/ getDefaultExportFromCjs(map.exports);

var findIndex = { exports: {} };

(function (module) {
  module.exports = require$$0$r;
})(findIndex);

var _findIndexInstanceProperty = /*@__PURE__*/ getDefaultExportFromCjs(findIndex.exports);

var IconContext = /*#__PURE__*/ createContext({});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys$1(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }

  return target;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _typeof(obj) {
  '@babel/helpers - typeof';

  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = '100%';
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  // Automatically convert percentage into number
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  // Handle floating point rounding errors
  if (Math.abs(n - max) < 0.000001) {
    return 1;
  }
  // Convert into [0, 1] range if it isn't already
  if (max === 360) {
    // If n is a hue given in degrees,
    // wrap around out-of-range values into [0, 360] range
    // then convert into [0, 1].
    n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
  } else {
    // If n not a hue given in degrees
    // Convert into [0, 1] range if it isn't already.
    n = (n % max) / parseFloat(String(max));
  }
  return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
  if (n <= 1) {
    return ''.concat(Number(n) * 100, '%');
  }
  return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
  return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255,
  };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    // achromatic
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
  ];
  // Return a 3 character hex if possible
  if (
    allow3Char &&
    hex[0].startsWith(hex[0].charAt(1)) &&
    hex[1].startsWith(hex[1].charAt(1)) &&
    hex[2].startsWith(hex[2].charAt(1))
  ) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join('');
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color === 'string') {
    color = stringInputToObject(color);
  }
  if (typeof color === 'object') {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = 'hsv';
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = 'hsl';
    }
    if (Object.prototype.hasOwnProperty.call(color, 'a')) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a,
  };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = '(?:'.concat(CSS_NUMBER, ')|(?:').concat(CSS_INTEGER, ')');
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = '[\\s|\\(]+('
  .concat(CSS_UNIT, ')[,|\\s]+(')
  .concat(CSS_UNIT, ')[,|\\s]+(')
  .concat(CSS_UNIT, ')\\s*\\)?');
var PERMISSIVE_MATCH4 = '[\\s|\\(]+('
  .concat(CSS_UNIT, ')[,|\\s]+(')
  .concat(CSS_UNIT, ')[,|\\s]+(')
  .concat(CSS_UNIT, ')[,|\\s]+(')
  .concat(CSS_UNIT, ')\\s*\\)?');
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
  rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
  hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
  hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
  hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
  hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === 'transparent') {
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  }
  // Try to match string input using regular expressions.
  // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
  // Just return an object and let the conversion functions handle that.
  // This way the result will be the same whether the tinycolor is initialized with string or object.
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? 'name' : 'hex8',
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? 'name' : 'hex',
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? 'name' : 'hex8',
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? 'name' : 'hex',
    };
  }
  return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [
  {
    index: 7,
    opacity: 0.15,
  },
  {
    index: 6,
    opacity: 0.25,
  },
  {
    index: 5,
    opacity: 0.3,
  },
  {
    index: 5,
    opacity: 0.45,
  },
  {
    index: 5,
    opacity: 0.65,
  },
  {
    index: 5,
    opacity: 0.85,
  },
  {
    index: 4,
    opacity: 0.9,
  },
  {
    index: 3,
    opacity: 0.95,
  },
  {
    index: 2,
    opacity: 0.97,
  },
  {
    index: 1,
    opacity: 0.98,
  },
]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
    g = _ref.g,
    b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v,
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`

function toHex(_ref2) {
  var r = _ref2.r,
    g = _ref2.g,
    b = _ref2.b;
  return '#'.concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.

function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正

  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间

  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(
      inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true),
      }),
    );
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(
      inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue(_hsv, _i),
      }),
    );

    patterns.push(_colorString);
  } // dark theme patterns

  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
        opacity = _ref3.opacity;
      var darkColorString = toHex(
        mix(
          inputToRGB(opts.backgroundColor || '#141414'),
          inputToRGB(patterns[index]),
          opacity * 100,
        ),
      );
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666',
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate$1(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414',
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

function warning(valid, message) {
  warn(valid, '[@ant-design/icons] '.concat(message));
}
function isIconDefinition(target) {
  return (
    _typeof(target) === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    (_typeof(target.icon) === 'object' || typeof target.icon === 'function')
  );
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/ React__default.createElement(
      node.tag,
      _objectSpread2(
        {
          key: key,
        },
        normalizeAttrs(node.attrs),
      ),
      (node.children || []).map(function (child, index) {
        return generate(child, ''.concat(key, '-').concat(node.tag, '-').concat(index));
      }),
    );
  }

  return /*#__PURE__*/ React__default.createElement(
    node.tag,
    _objectSpread2(
      _objectSpread2(
        {
          key: key,
        },
        normalizeAttrs(node.attrs),
      ),
      rootProps,
    ),
    (node.children || []).map(function (child, index) {
      return generate(child, ''.concat(key, '-').concat(node.tag, '-').concat(index));
    }),
  );
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4

var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false',
};
var iconStyles =
  '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n';
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;

  var _useContext = useContext(IconContext),
    csp = _useContext.csp;

  useEffect(function () {
    updateCSS(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp,
    });
  }, []);
};

var _excluded$3 = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'];
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = _objectWithoutProperties(props, _excluded$3);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
    };
  }

  useInsertStyles();
  warning(isIconDefinition(icon), 'icon should be icon definiton, but got '.concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread2(
      _objectSpread2({}, target),
      {},
      {
        icon: target.icon(colors.primaryColor, colors.secondaryColor),
      },
    );
  }

  return generate(
    target.icon,
    'svg-'.concat(target.name),
    _objectSpread2(
      {
        className: className,
        onClick: onClick,
        style: style,
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true',
      },
      restProps,
    ),
  );
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

var _excluded$2 = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon$1 = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = _objectWithoutProperties(props, _excluded$2);

  var _React$useContext = React.useContext(IconContext),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classNames(
    prefixCls,
    ((_classNames = {}),
    _defineProperty(_classNames, ''.concat(prefixCls, '-').concat(icon.name), !!icon.name),
    _defineProperty(_classNames, ''.concat(prefixCls, '-spin'), !!spin || icon.name === 'loading'),
    _classNames),
    className,
  );
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate
    ? {
        msTransform: 'rotate('.concat(rotate, 'deg)'),
        transform: 'rotate('.concat(rotate, 'deg)'),
      }
    : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/ React.createElement(
    'span',
    _objectSpread2(
      _objectSpread2(
        {
          role: 'img',
          'aria-label': icon.name,
        },
        restProps,
      ),
      {},
      {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString,
      },
    ),
    /*#__PURE__*/ React.createElement(IconBase, {
      icon: icon,
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
      style: svgStyle,
    }),
  );
});
Icon$1.displayName = 'AntdIcon';
Icon$1.getTwoToneColor = getTwoToneColor;
Icon$1.setTwoToneColor = setTwoToneColor;

var AccountBookFilled = function AccountBookFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AccountBookFilledSvg,
      },
    ),
  );
};

AccountBookFilled.displayName = 'AccountBookFilled';

var AccountBookOutlined = function AccountBookOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AccountBookOutlinedSvg,
      },
    ),
  );
};

AccountBookOutlined.displayName = 'AccountBookOutlined';

var AccountBookTwoTone = function AccountBookTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AccountBookTwoToneSvg,
      },
    ),
  );
};

AccountBookTwoTone.displayName = 'AccountBookTwoTone';

var AimOutlined = function AimOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AimOutlinedSvg,
      },
    ),
  );
};

AimOutlined.displayName = 'AimOutlined';

var AlertFilled = function AlertFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlertFilledSvg,
      },
    ),
  );
};

AlertFilled.displayName = 'AlertFilled';

var AlertOutlined = function AlertOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlertOutlinedSvg,
      },
    ),
  );
};

AlertOutlined.displayName = 'AlertOutlined';

var AlertTwoTone = function AlertTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlertTwoToneSvg,
      },
    ),
  );
};

AlertTwoTone.displayName = 'AlertTwoTone';

var AlibabaOutlined = function AlibabaOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlibabaOutlinedSvg,
      },
    ),
  );
};

AlibabaOutlined.displayName = 'AlibabaOutlined';

var AlignCenterOutlined = function AlignCenterOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlignCenterOutlinedSvg,
      },
    ),
  );
};

AlignCenterOutlined.displayName = 'AlignCenterOutlined';

var AlignLeftOutlined = function AlignLeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlignLeftOutlinedSvg,
      },
    ),
  );
};

AlignLeftOutlined.displayName = 'AlignLeftOutlined';

var AlignRightOutlined = function AlignRightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlignRightOutlinedSvg,
      },
    ),
  );
};

AlignRightOutlined.displayName = 'AlignRightOutlined';

var AlipayCircleFilled = function AlipayCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlipayCircleFilledSvg,
      },
    ),
  );
};

AlipayCircleFilled.displayName = 'AlipayCircleFilled';

var AlipayCircleOutlined = function AlipayCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlipayCircleOutlinedSvg,
      },
    ),
  );
};

AlipayCircleOutlined.displayName = 'AlipayCircleOutlined';

var AlipayOutlined = function AlipayOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlipayOutlinedSvg,
      },
    ),
  );
};

AlipayOutlined.displayName = 'AlipayOutlined';

var AlipaySquareFilled = function AlipaySquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AlipaySquareFilledSvg,
      },
    ),
  );
};

AlipaySquareFilled.displayName = 'AlipaySquareFilled';

var AliwangwangFilled = function AliwangwangFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AliwangwangFilledSvg,
      },
    ),
  );
};

AliwangwangFilled.displayName = 'AliwangwangFilled';

var AliwangwangOutlined = function AliwangwangOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AliwangwangOutlinedSvg,
      },
    ),
  );
};

AliwangwangOutlined.displayName = 'AliwangwangOutlined';

var AliyunOutlined = function AliyunOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AliyunOutlinedSvg,
      },
    ),
  );
};

AliyunOutlined.displayName = 'AliyunOutlined';

var AmazonCircleFilled = function AmazonCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AmazonCircleFilledSvg,
      },
    ),
  );
};

AmazonCircleFilled.displayName = 'AmazonCircleFilled';

var AmazonOutlined = function AmazonOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AmazonOutlinedSvg,
      },
    ),
  );
};

AmazonOutlined.displayName = 'AmazonOutlined';

var AmazonSquareFilled = function AmazonSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AmazonSquareFilledSvg,
      },
    ),
  );
};

AmazonSquareFilled.displayName = 'AmazonSquareFilled';

var AndroidFilled = function AndroidFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AndroidFilledSvg,
      },
    ),
  );
};

AndroidFilled.displayName = 'AndroidFilled';

var AndroidOutlined = function AndroidOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AndroidOutlinedSvg,
      },
    ),
  );
};

AndroidOutlined.displayName = 'AndroidOutlined';

var AntCloudOutlined = function AntCloudOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AntCloudOutlinedSvg,
      },
    ),
  );
};

AntCloudOutlined.displayName = 'AntCloudOutlined';

var AntDesignOutlined = function AntDesignOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AntDesignOutlinedSvg,
      },
    ),
  );
};

AntDesignOutlined.displayName = 'AntDesignOutlined';

var ApartmentOutlined = function ApartmentOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ApartmentOutlinedSvg,
      },
    ),
  );
};

ApartmentOutlined.displayName = 'ApartmentOutlined';

var ApiFilled = function ApiFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ApiFilledSvg,
      },
    ),
  );
};

ApiFilled.displayName = 'ApiFilled';

var ApiOutlined = function ApiOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ApiOutlinedSvg,
      },
    ),
  );
};

ApiOutlined.displayName = 'ApiOutlined';

var ApiTwoTone = function ApiTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ApiTwoToneSvg,
      },
    ),
  );
};

ApiTwoTone.displayName = 'ApiTwoTone';

var AppleFilled = function AppleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AppleFilledSvg,
      },
    ),
  );
};

AppleFilled.displayName = 'AppleFilled';

var AppleOutlined = function AppleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AppleOutlinedSvg,
      },
    ),
  );
};

AppleOutlined.displayName = 'AppleOutlined';

var AppstoreAddOutlined = function AppstoreAddOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AppstoreAddOutlinedSvg,
      },
    ),
  );
};

AppstoreAddOutlined.displayName = 'AppstoreAddOutlined';

var AppstoreFilled = function AppstoreFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AppstoreFilledSvg,
      },
    ),
  );
};

AppstoreFilled.displayName = 'AppstoreFilled';

var AppstoreOutlined = function AppstoreOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AppstoreOutlinedSvg,
      },
    ),
  );
};

AppstoreOutlined.displayName = 'AppstoreOutlined';

var AppstoreTwoTone = function AppstoreTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AppstoreTwoToneSvg,
      },
    ),
  );
};

AppstoreTwoTone.displayName = 'AppstoreTwoTone';

var AreaChartOutlined = function AreaChartOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AreaChartOutlinedSvg,
      },
    ),
  );
};

AreaChartOutlined.displayName = 'AreaChartOutlined';

var ArrowDownOutlined = function ArrowDownOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ArrowDownOutlinedSvg,
      },
    ),
  );
};

ArrowDownOutlined.displayName = 'ArrowDownOutlined';

var ArrowLeftOutlined = function ArrowLeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ArrowLeftOutlinedSvg,
      },
    ),
  );
};

ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';

var ArrowRightOutlined = function ArrowRightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ArrowRightOutlinedSvg,
      },
    ),
  );
};

ArrowRightOutlined.displayName = 'ArrowRightOutlined';

var ArrowUpOutlined = function ArrowUpOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ArrowUpOutlinedSvg,
      },
    ),
  );
};

ArrowUpOutlined.displayName = 'ArrowUpOutlined';

var ArrowsAltOutlined = function ArrowsAltOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ArrowsAltOutlinedSvg,
      },
    ),
  );
};

ArrowsAltOutlined.displayName = 'ArrowsAltOutlined';

var AudioFilled = function AudioFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AudioFilledSvg,
      },
    ),
  );
};

AudioFilled.displayName = 'AudioFilled';

var AudioMutedOutlined = function AudioMutedOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AudioMutedOutlinedSvg,
      },
    ),
  );
};

AudioMutedOutlined.displayName = 'AudioMutedOutlined';

var AudioOutlined = function AudioOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AudioOutlinedSvg,
      },
    ),
  );
};

AudioOutlined.displayName = 'AudioOutlined';

var AudioTwoTone = function AudioTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AudioTwoToneSvg,
      },
    ),
  );
};

AudioTwoTone.displayName = 'AudioTwoTone';

var AuditOutlined = function AuditOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: AuditOutlinedSvg,
      },
    ),
  );
};

AuditOutlined.displayName = 'AuditOutlined';

var BackwardFilled = function BackwardFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BackwardFilledSvg,
      },
    ),
  );
};

BackwardFilled.displayName = 'BackwardFilled';

var BackwardOutlined = function BackwardOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BackwardOutlinedSvg,
      },
    ),
  );
};

BackwardOutlined.displayName = 'BackwardOutlined';

var BankFilled = function BankFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BankFilledSvg,
      },
    ),
  );
};

BankFilled.displayName = 'BankFilled';

var BankOutlined = function BankOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BankOutlinedSvg,
      },
    ),
  );
};

BankOutlined.displayName = 'BankOutlined';

var BankTwoTone = function BankTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BankTwoToneSvg,
      },
    ),
  );
};

BankTwoTone.displayName = 'BankTwoTone';

var BarChartOutlined = function BarChartOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BarChartOutlinedSvg,
      },
    ),
  );
};

BarChartOutlined.displayName = 'BarChartOutlined';

var BarcodeOutlined = function BarcodeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BarcodeOutlinedSvg,
      },
    ),
  );
};

BarcodeOutlined.displayName = 'BarcodeOutlined';

var BarsOutlined = function BarsOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BarsOutlinedSvg,
      },
    ),
  );
};

BarsOutlined.displayName = 'BarsOutlined';

var BehanceCircleFilled = function BehanceCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BehanceCircleFilledSvg,
      },
    ),
  );
};

BehanceCircleFilled.displayName = 'BehanceCircleFilled';

var BehanceOutlined = function BehanceOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BehanceOutlinedSvg,
      },
    ),
  );
};

BehanceOutlined.displayName = 'BehanceOutlined';

var BehanceSquareFilled = function BehanceSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BehanceSquareFilledSvg,
      },
    ),
  );
};

BehanceSquareFilled.displayName = 'BehanceSquareFilled';

var BehanceSquareOutlined = function BehanceSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BehanceSquareOutlinedSvg,
      },
    ),
  );
};

BehanceSquareOutlined.displayName = 'BehanceSquareOutlined';

var BellFilled = function BellFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BellFilledSvg,
      },
    ),
  );
};

BellFilled.displayName = 'BellFilled';

var BellOutlined = function BellOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BellOutlinedSvg,
      },
    ),
  );
};

BellOutlined.displayName = 'BellOutlined';

var BellTwoTone = function BellTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BellTwoToneSvg,
      },
    ),
  );
};

BellTwoTone.displayName = 'BellTwoTone';

var BgColorsOutlined = function BgColorsOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BgColorsOutlinedSvg,
      },
    ),
  );
};

BgColorsOutlined.displayName = 'BgColorsOutlined';

var BlockOutlined = function BlockOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BlockOutlinedSvg,
      },
    ),
  );
};

BlockOutlined.displayName = 'BlockOutlined';

var BoldOutlined = function BoldOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BoldOutlinedSvg,
      },
    ),
  );
};

BoldOutlined.displayName = 'BoldOutlined';

var BookFilled = function BookFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BookFilledSvg,
      },
    ),
  );
};

BookFilled.displayName = 'BookFilled';

var BookOutlined = function BookOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BookOutlinedSvg,
      },
    ),
  );
};

BookOutlined.displayName = 'BookOutlined';

var BookTwoTone = function BookTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BookTwoToneSvg,
      },
    ),
  );
};

BookTwoTone.displayName = 'BookTwoTone';

var BorderBottomOutlined = function BorderBottomOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BorderBottomOutlinedSvg,
      },
    ),
  );
};

BorderBottomOutlined.displayName = 'BorderBottomOutlined';

var BorderHorizontalOutlined = function BorderHorizontalOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BorderHorizontalOutlinedSvg,
      },
    ),
  );
};

BorderHorizontalOutlined.displayName = 'BorderHorizontalOutlined';

var BorderInnerOutlined = function BorderInnerOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BorderInnerOutlinedSvg,
      },
    ),
  );
};

BorderInnerOutlined.displayName = 'BorderInnerOutlined';

var BorderLeftOutlined = function BorderLeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BorderLeftOutlinedSvg,
      },
    ),
  );
};

BorderLeftOutlined.displayName = 'BorderLeftOutlined';

var BorderOuterOutlined = function BorderOuterOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BorderOuterOutlinedSvg,
      },
    ),
  );
};

BorderOuterOutlined.displayName = 'BorderOuterOutlined';

var BorderOutlined = function BorderOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BorderOutlinedSvg,
      },
    ),
  );
};

BorderOutlined.displayName = 'BorderOutlined';

var BorderRightOutlined = function BorderRightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BorderRightOutlinedSvg,
      },
    ),
  );
};

BorderRightOutlined.displayName = 'BorderRightOutlined';

var BorderTopOutlined = function BorderTopOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BorderTopOutlinedSvg,
      },
    ),
  );
};

BorderTopOutlined.displayName = 'BorderTopOutlined';

var BorderVerticleOutlined = function BorderVerticleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BorderVerticleOutlinedSvg,
      },
    ),
  );
};

BorderVerticleOutlined.displayName = 'BorderVerticleOutlined';

var BorderlessTableOutlined = function BorderlessTableOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BorderlessTableOutlinedSvg,
      },
    ),
  );
};

BorderlessTableOutlined.displayName = 'BorderlessTableOutlined';

var BoxPlotFilled = function BoxPlotFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BoxPlotFilledSvg,
      },
    ),
  );
};

BoxPlotFilled.displayName = 'BoxPlotFilled';

var BoxPlotOutlined = function BoxPlotOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BoxPlotOutlinedSvg,
      },
    ),
  );
};

BoxPlotOutlined.displayName = 'BoxPlotOutlined';

var BoxPlotTwoTone = function BoxPlotTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BoxPlotTwoToneSvg,
      },
    ),
  );
};

BoxPlotTwoTone.displayName = 'BoxPlotTwoTone';

var BranchesOutlined = function BranchesOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BranchesOutlinedSvg,
      },
    ),
  );
};

BranchesOutlined.displayName = 'BranchesOutlined';

var BugFilled = function BugFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BugFilledSvg,
      },
    ),
  );
};

BugFilled.displayName = 'BugFilled';

var BugOutlined = function BugOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BugOutlinedSvg,
      },
    ),
  );
};

BugOutlined.displayName = 'BugOutlined';

var BugTwoTone = function BugTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BugTwoToneSvg,
      },
    ),
  );
};

BugTwoTone.displayName = 'BugTwoTone';

var BuildFilled = function BuildFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BuildFilledSvg,
      },
    ),
  );
};

BuildFilled.displayName = 'BuildFilled';

var BuildOutlined = function BuildOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BuildOutlinedSvg,
      },
    ),
  );
};

BuildOutlined.displayName = 'BuildOutlined';

var BuildTwoTone = function BuildTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BuildTwoToneSvg,
      },
    ),
  );
};

BuildTwoTone.displayName = 'BuildTwoTone';

var BulbFilled = function BulbFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BulbFilledSvg,
      },
    ),
  );
};

BulbFilled.displayName = 'BulbFilled';

var BulbOutlined = function BulbOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BulbOutlinedSvg,
      },
    ),
  );
};

BulbOutlined.displayName = 'BulbOutlined';

var BulbTwoTone = function BulbTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: BulbTwoToneSvg,
      },
    ),
  );
};

BulbTwoTone.displayName = 'BulbTwoTone';

var CalculatorFilled = function CalculatorFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CalculatorFilledSvg,
      },
    ),
  );
};

CalculatorFilled.displayName = 'CalculatorFilled';

var CalculatorOutlined = function CalculatorOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CalculatorOutlinedSvg,
      },
    ),
  );
};

CalculatorOutlined.displayName = 'CalculatorOutlined';

var CalculatorTwoTone = function CalculatorTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CalculatorTwoToneSvg,
      },
    ),
  );
};

CalculatorTwoTone.displayName = 'CalculatorTwoTone';

var CalendarFilled = function CalendarFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CalendarFilledSvg,
      },
    ),
  );
};

CalendarFilled.displayName = 'CalendarFilled';

var CalendarOutlined = function CalendarOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CalendarOutlinedSvg,
      },
    ),
  );
};

CalendarOutlined.displayName = 'CalendarOutlined';

var CalendarTwoTone = function CalendarTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CalendarTwoToneSvg,
      },
    ),
  );
};

CalendarTwoTone.displayName = 'CalendarTwoTone';

var CameraFilled = function CameraFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CameraFilledSvg,
      },
    ),
  );
};

CameraFilled.displayName = 'CameraFilled';

var CameraOutlined = function CameraOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CameraOutlinedSvg,
      },
    ),
  );
};

CameraOutlined.displayName = 'CameraOutlined';

var CameraTwoTone = function CameraTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CameraTwoToneSvg,
      },
    ),
  );
};

CameraTwoTone.displayName = 'CameraTwoTone';

var CarFilled = function CarFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CarFilledSvg,
      },
    ),
  );
};

CarFilled.displayName = 'CarFilled';

var CarOutlined = function CarOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CarOutlinedSvg,
      },
    ),
  );
};

CarOutlined.displayName = 'CarOutlined';

var CarTwoTone = function CarTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CarTwoToneSvg,
      },
    ),
  );
};

CarTwoTone.displayName = 'CarTwoTone';

var CaretDownFilled = function CaretDownFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CaretDownFilledSvg,
      },
    ),
  );
};

CaretDownFilled.displayName = 'CaretDownFilled';

var CaretDownOutlined = function CaretDownOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CaretDownOutlinedSvg,
      },
    ),
  );
};

CaretDownOutlined.displayName = 'CaretDownOutlined';

var CaretLeftFilled = function CaretLeftFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CaretLeftFilledSvg,
      },
    ),
  );
};

CaretLeftFilled.displayName = 'CaretLeftFilled';

var CaretLeftOutlined = function CaretLeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CaretLeftOutlinedSvg,
      },
    ),
  );
};

CaretLeftOutlined.displayName = 'CaretLeftOutlined';

var CaretRightFilled = function CaretRightFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CaretRightFilledSvg,
      },
    ),
  );
};

CaretRightFilled.displayName = 'CaretRightFilled';

var CaretRightOutlined = function CaretRightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CaretRightOutlinedSvg,
      },
    ),
  );
};

CaretRightOutlined.displayName = 'CaretRightOutlined';

var CaretUpFilled = function CaretUpFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CaretUpFilledSvg,
      },
    ),
  );
};

CaretUpFilled.displayName = 'CaretUpFilled';

var CaretUpOutlined = function CaretUpOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CaretUpOutlinedSvg,
      },
    ),
  );
};

CaretUpOutlined.displayName = 'CaretUpOutlined';

var CarryOutFilled = function CarryOutFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CarryOutFilledSvg,
      },
    ),
  );
};

CarryOutFilled.displayName = 'CarryOutFilled';

var CarryOutOutlined = function CarryOutOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CarryOutOutlinedSvg,
      },
    ),
  );
};

CarryOutOutlined.displayName = 'CarryOutOutlined';

var CarryOutTwoTone = function CarryOutTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CarryOutTwoToneSvg,
      },
    ),
  );
};

CarryOutTwoTone.displayName = 'CarryOutTwoTone';

var CheckCircleFilled = function CheckCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CheckCircleFilledSvg,
      },
    ),
  );
};

CheckCircleFilled.displayName = 'CheckCircleFilled';

var CheckCircleOutlined = function CheckCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CheckCircleOutlinedSvg,
      },
    ),
  );
};

CheckCircleOutlined.displayName = 'CheckCircleOutlined';

var CheckCircleTwoTone = function CheckCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CheckCircleTwoToneSvg,
      },
    ),
  );
};

CheckCircleTwoTone.displayName = 'CheckCircleTwoTone';

var CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CheckOutlinedSvg,
      },
    ),
  );
};

CheckOutlined.displayName = 'CheckOutlined';

var CheckSquareFilled = function CheckSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CheckSquareFilledSvg,
      },
    ),
  );
};

CheckSquareFilled.displayName = 'CheckSquareFilled';

var CheckSquareOutlined = function CheckSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CheckSquareOutlinedSvg,
      },
    ),
  );
};

CheckSquareOutlined.displayName = 'CheckSquareOutlined';

var CheckSquareTwoTone = function CheckSquareTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CheckSquareTwoToneSvg,
      },
    ),
  );
};

CheckSquareTwoTone.displayName = 'CheckSquareTwoTone';

var ChromeFilled = function ChromeFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ChromeFilledSvg,
      },
    ),
  );
};

ChromeFilled.displayName = 'ChromeFilled';

var ChromeOutlined = function ChromeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ChromeOutlinedSvg,
      },
    ),
  );
};

ChromeOutlined.displayName = 'ChromeOutlined';

var CiCircleFilled = function CiCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CiCircleFilledSvg,
      },
    ),
  );
};

CiCircleFilled.displayName = 'CiCircleFilled';

var CiCircleOutlined = function CiCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CiCircleOutlinedSvg,
      },
    ),
  );
};

CiCircleOutlined.displayName = 'CiCircleOutlined';

var CiCircleTwoTone = function CiCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CiCircleTwoToneSvg,
      },
    ),
  );
};

CiCircleTwoTone.displayName = 'CiCircleTwoTone';

var CiOutlined = function CiOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CiOutlinedSvg,
      },
    ),
  );
};

CiOutlined.displayName = 'CiOutlined';

var CiTwoTone = function CiTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CiTwoToneSvg,
      },
    ),
  );
};

CiTwoTone.displayName = 'CiTwoTone';

var ClearOutlined = function ClearOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ClearOutlinedSvg,
      },
    ),
  );
};

ClearOutlined.displayName = 'ClearOutlined';

var ClockCircleFilled = function ClockCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ClockCircleFilledSvg,
      },
    ),
  );
};

ClockCircleFilled.displayName = 'ClockCircleFilled';

var ClockCircleOutlined = function ClockCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ClockCircleOutlinedSvg,
      },
    ),
  );
};

ClockCircleOutlined.displayName = 'ClockCircleOutlined';

var ClockCircleTwoTone = function ClockCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ClockCircleTwoToneSvg,
      },
    ),
  );
};

ClockCircleTwoTone.displayName = 'ClockCircleTwoTone';

var CloseCircleFilled = function CloseCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloseCircleFilledSvg,
      },
    ),
  );
};

CloseCircleFilled.displayName = 'CloseCircleFilled';

var CloseCircleOutlined = function CloseCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloseCircleOutlinedSvg,
      },
    ),
  );
};

CloseCircleOutlined.displayName = 'CloseCircleOutlined';

var CloseCircleTwoTone = function CloseCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloseCircleTwoToneSvg,
      },
    ),
  );
};

CloseCircleTwoTone.displayName = 'CloseCircleTwoTone';

var CloseOutlined = function CloseOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloseOutlinedSvg,
      },
    ),
  );
};

CloseOutlined.displayName = 'CloseOutlined';

var CloseSquareFilled = function CloseSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloseSquareFilledSvg,
      },
    ),
  );
};

CloseSquareFilled.displayName = 'CloseSquareFilled';

var CloseSquareOutlined = function CloseSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloseSquareOutlinedSvg,
      },
    ),
  );
};

CloseSquareOutlined.displayName = 'CloseSquareOutlined';

var CloseSquareTwoTone = function CloseSquareTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloseSquareTwoToneSvg,
      },
    ),
  );
};

CloseSquareTwoTone.displayName = 'CloseSquareTwoTone';

var CloudDownloadOutlined = function CloudDownloadOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloudDownloadOutlinedSvg,
      },
    ),
  );
};

CloudDownloadOutlined.displayName = 'CloudDownloadOutlined';

var CloudFilled = function CloudFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloudFilledSvg,
      },
    ),
  );
};

CloudFilled.displayName = 'CloudFilled';

var CloudOutlined = function CloudOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloudOutlinedSvg,
      },
    ),
  );
};

CloudOutlined.displayName = 'CloudOutlined';

var CloudServerOutlined = function CloudServerOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloudServerOutlinedSvg,
      },
    ),
  );
};

CloudServerOutlined.displayName = 'CloudServerOutlined';

var CloudSyncOutlined = function CloudSyncOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloudSyncOutlinedSvg,
      },
    ),
  );
};

CloudSyncOutlined.displayName = 'CloudSyncOutlined';

var CloudTwoTone = function CloudTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloudTwoToneSvg,
      },
    ),
  );
};

CloudTwoTone.displayName = 'CloudTwoTone';

var CloudUploadOutlined = function CloudUploadOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CloudUploadOutlinedSvg,
      },
    ),
  );
};

CloudUploadOutlined.displayName = 'CloudUploadOutlined';

var ClusterOutlined = function ClusterOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ClusterOutlinedSvg,
      },
    ),
  );
};

ClusterOutlined.displayName = 'ClusterOutlined';

var CodeFilled = function CodeFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CodeFilledSvg,
      },
    ),
  );
};

CodeFilled.displayName = 'CodeFilled';

var CodeOutlined = function CodeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CodeOutlinedSvg,
      },
    ),
  );
};

CodeOutlined.displayName = 'CodeOutlined';

var CodeSandboxCircleFilled = function CodeSandboxCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CodeSandboxCircleFilledSvg,
      },
    ),
  );
};

CodeSandboxCircleFilled.displayName = 'CodeSandboxCircleFilled';

var CodeSandboxOutlined = function CodeSandboxOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CodeSandboxOutlinedSvg,
      },
    ),
  );
};

CodeSandboxOutlined.displayName = 'CodeSandboxOutlined';

var CodeSandboxSquareFilled = function CodeSandboxSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CodeSandboxSquareFilledSvg,
      },
    ),
  );
};

CodeSandboxSquareFilled.displayName = 'CodeSandboxSquareFilled';

var CodeTwoTone = function CodeTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CodeTwoToneSvg,
      },
    ),
  );
};

CodeTwoTone.displayName = 'CodeTwoTone';

var CodepenCircleFilled = function CodepenCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CodepenCircleFilledSvg,
      },
    ),
  );
};

CodepenCircleFilled.displayName = 'CodepenCircleFilled';

var CodepenCircleOutlined = function CodepenCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CodepenCircleOutlinedSvg,
      },
    ),
  );
};

CodepenCircleOutlined.displayName = 'CodepenCircleOutlined';

var CodepenOutlined = function CodepenOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CodepenOutlinedSvg,
      },
    ),
  );
};

CodepenOutlined.displayName = 'CodepenOutlined';

var CodepenSquareFilled = function CodepenSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CodepenSquareFilledSvg,
      },
    ),
  );
};

CodepenSquareFilled.displayName = 'CodepenSquareFilled';

var CoffeeOutlined = function CoffeeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CoffeeOutlinedSvg,
      },
    ),
  );
};

CoffeeOutlined.displayName = 'CoffeeOutlined';

var ColumnHeightOutlined = function ColumnHeightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ColumnHeightOutlinedSvg,
      },
    ),
  );
};

ColumnHeightOutlined.displayName = 'ColumnHeightOutlined';

var ColumnWidthOutlined = function ColumnWidthOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ColumnWidthOutlinedSvg,
      },
    ),
  );
};

ColumnWidthOutlined.displayName = 'ColumnWidthOutlined';

var CommentOutlined = function CommentOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CommentOutlinedSvg,
      },
    ),
  );
};

CommentOutlined.displayName = 'CommentOutlined';

var CompassFilled = function CompassFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CompassFilledSvg,
      },
    ),
  );
};

CompassFilled.displayName = 'CompassFilled';

var CompassOutlined = function CompassOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CompassOutlinedSvg,
      },
    ),
  );
};

CompassOutlined.displayName = 'CompassOutlined';

var CompassTwoTone = function CompassTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CompassTwoToneSvg,
      },
    ),
  );
};

CompassTwoTone.displayName = 'CompassTwoTone';

var CompressOutlined = function CompressOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CompressOutlinedSvg,
      },
    ),
  );
};

CompressOutlined.displayName = 'CompressOutlined';

var ConsoleSqlOutlined = function ConsoleSqlOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ConsoleSqlOutlinedSvg,
      },
    ),
  );
};

ConsoleSqlOutlined.displayName = 'ConsoleSqlOutlined';

var ContactsFilled = function ContactsFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ContactsFilledSvg,
      },
    ),
  );
};

ContactsFilled.displayName = 'ContactsFilled';

var ContactsOutlined = function ContactsOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ContactsOutlinedSvg,
      },
    ),
  );
};

ContactsOutlined.displayName = 'ContactsOutlined';

var ContactsTwoTone = function ContactsTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ContactsTwoToneSvg,
      },
    ),
  );
};

ContactsTwoTone.displayName = 'ContactsTwoTone';

var ContainerFilled = function ContainerFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ContainerFilledSvg,
      },
    ),
  );
};

ContainerFilled.displayName = 'ContainerFilled';

var ContainerOutlined = function ContainerOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ContainerOutlinedSvg,
      },
    ),
  );
};

ContainerOutlined.displayName = 'ContainerOutlined';

var ContainerTwoTone = function ContainerTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ContainerTwoToneSvg,
      },
    ),
  );
};

ContainerTwoTone.displayName = 'ContainerTwoTone';

var ControlFilled = function ControlFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ControlFilledSvg,
      },
    ),
  );
};

ControlFilled.displayName = 'ControlFilled';

var ControlOutlined = function ControlOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ControlOutlinedSvg,
      },
    ),
  );
};

ControlOutlined.displayName = 'ControlOutlined';

var ControlTwoTone = function ControlTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ControlTwoToneSvg,
      },
    ),
  );
};

ControlTwoTone.displayName = 'ControlTwoTone';

var CopyFilled = function CopyFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CopyFilledSvg,
      },
    ),
  );
};

CopyFilled.displayName = 'CopyFilled';

var CopyOutlined = function CopyOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CopyOutlinedSvg,
      },
    ),
  );
};

CopyOutlined.displayName = 'CopyOutlined';

var CopyTwoTone = function CopyTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CopyTwoToneSvg,
      },
    ),
  );
};

CopyTwoTone.displayName = 'CopyTwoTone';

var CopyrightCircleFilled = function CopyrightCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CopyrightCircleFilledSvg,
      },
    ),
  );
};

CopyrightCircleFilled.displayName = 'CopyrightCircleFilled';

var CopyrightCircleOutlined = function CopyrightCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CopyrightCircleOutlinedSvg,
      },
    ),
  );
};

CopyrightCircleOutlined.displayName = 'CopyrightCircleOutlined';

var CopyrightCircleTwoTone = function CopyrightCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CopyrightCircleTwoToneSvg,
      },
    ),
  );
};

CopyrightCircleTwoTone.displayName = 'CopyrightCircleTwoTone';

var CopyrightOutlined = function CopyrightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CopyrightOutlinedSvg,
      },
    ),
  );
};

CopyrightOutlined.displayName = 'CopyrightOutlined';

var CopyrightTwoTone = function CopyrightTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CopyrightTwoToneSvg,
      },
    ),
  );
};

CopyrightTwoTone.displayName = 'CopyrightTwoTone';

var CreditCardFilled = function CreditCardFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CreditCardFilledSvg,
      },
    ),
  );
};

CreditCardFilled.displayName = 'CreditCardFilled';

var CreditCardOutlined = function CreditCardOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CreditCardOutlinedSvg,
      },
    ),
  );
};

CreditCardOutlined.displayName = 'CreditCardOutlined';

var CreditCardTwoTone = function CreditCardTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CreditCardTwoToneSvg,
      },
    ),
  );
};

CreditCardTwoTone.displayName = 'CreditCardTwoTone';

var CrownFilled = function CrownFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CrownFilledSvg,
      },
    ),
  );
};

CrownFilled.displayName = 'CrownFilled';

var CrownOutlined = function CrownOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CrownOutlinedSvg,
      },
    ),
  );
};

CrownOutlined.displayName = 'CrownOutlined';

var CrownTwoTone = function CrownTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CrownTwoToneSvg,
      },
    ),
  );
};

CrownTwoTone.displayName = 'CrownTwoTone';

var CustomerServiceFilled = function CustomerServiceFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CustomerServiceFilledSvg,
      },
    ),
  );
};

CustomerServiceFilled.displayName = 'CustomerServiceFilled';

var CustomerServiceOutlined = function CustomerServiceOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CustomerServiceOutlinedSvg,
      },
    ),
  );
};

CustomerServiceOutlined.displayName = 'CustomerServiceOutlined';

var CustomerServiceTwoTone = function CustomerServiceTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: CustomerServiceTwoToneSvg,
      },
    ),
  );
};

CustomerServiceTwoTone.displayName = 'CustomerServiceTwoTone';

var DashOutlined = function DashOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DashOutlinedSvg,
      },
    ),
  );
};

DashOutlined.displayName = 'DashOutlined';

var DashboardFilled = function DashboardFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DashboardFilledSvg,
      },
    ),
  );
};

DashboardFilled.displayName = 'DashboardFilled';

var DashboardOutlined = function DashboardOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DashboardOutlinedSvg,
      },
    ),
  );
};

DashboardOutlined.displayName = 'DashboardOutlined';

var DashboardTwoTone = function DashboardTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DashboardTwoToneSvg,
      },
    ),
  );
};

DashboardTwoTone.displayName = 'DashboardTwoTone';

var DatabaseFilled = function DatabaseFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DatabaseFilledSvg,
      },
    ),
  );
};

DatabaseFilled.displayName = 'DatabaseFilled';

var DatabaseOutlined = function DatabaseOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DatabaseOutlinedSvg,
      },
    ),
  );
};

DatabaseOutlined.displayName = 'DatabaseOutlined';

var DatabaseTwoTone = function DatabaseTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DatabaseTwoToneSvg,
      },
    ),
  );
};

DatabaseTwoTone.displayName = 'DatabaseTwoTone';

var DeleteColumnOutlined = function DeleteColumnOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DeleteColumnOutlinedSvg,
      },
    ),
  );
};

DeleteColumnOutlined.displayName = 'DeleteColumnOutlined';

var DeleteFilled = function DeleteFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DeleteFilledSvg,
      },
    ),
  );
};

DeleteFilled.displayName = 'DeleteFilled';

var DeleteOutlined = function DeleteOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DeleteOutlinedSvg,
      },
    ),
  );
};

DeleteOutlined.displayName = 'DeleteOutlined';

var DeleteRowOutlined = function DeleteRowOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DeleteRowOutlinedSvg,
      },
    ),
  );
};

DeleteRowOutlined.displayName = 'DeleteRowOutlined';

var DeleteTwoTone = function DeleteTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DeleteTwoToneSvg,
      },
    ),
  );
};

DeleteTwoTone.displayName = 'DeleteTwoTone';

var DeliveredProcedureOutlined = function DeliveredProcedureOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DeliveredProcedureOutlinedSvg,
      },
    ),
  );
};

DeliveredProcedureOutlined.displayName = 'DeliveredProcedureOutlined';

var DeploymentUnitOutlined = function DeploymentUnitOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DeploymentUnitOutlinedSvg,
      },
    ),
  );
};

DeploymentUnitOutlined.displayName = 'DeploymentUnitOutlined';

var DesktopOutlined = function DesktopOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DesktopOutlinedSvg,
      },
    ),
  );
};

DesktopOutlined.displayName = 'DesktopOutlined';

var DiffFilled = function DiffFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DiffFilledSvg,
      },
    ),
  );
};

DiffFilled.displayName = 'DiffFilled';

var DiffOutlined = function DiffOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DiffOutlinedSvg,
      },
    ),
  );
};

DiffOutlined.displayName = 'DiffOutlined';

var DiffTwoTone = function DiffTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DiffTwoToneSvg,
      },
    ),
  );
};

DiffTwoTone.displayName = 'DiffTwoTone';

var DingdingOutlined = function DingdingOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DingdingOutlinedSvg,
      },
    ),
  );
};

DingdingOutlined.displayName = 'DingdingOutlined';

var DingtalkCircleFilled = function DingtalkCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DingtalkCircleFilledSvg,
      },
    ),
  );
};

DingtalkCircleFilled.displayName = 'DingtalkCircleFilled';

var DingtalkOutlined = function DingtalkOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DingtalkOutlinedSvg,
      },
    ),
  );
};

DingtalkOutlined.displayName = 'DingtalkOutlined';

var DingtalkSquareFilled = function DingtalkSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DingtalkSquareFilledSvg,
      },
    ),
  );
};

DingtalkSquareFilled.displayName = 'DingtalkSquareFilled';

var DisconnectOutlined = function DisconnectOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DisconnectOutlinedSvg,
      },
    ),
  );
};

DisconnectOutlined.displayName = 'DisconnectOutlined';

var DislikeFilled = function DislikeFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DislikeFilledSvg,
      },
    ),
  );
};

DislikeFilled.displayName = 'DislikeFilled';

var DislikeOutlined = function DislikeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DislikeOutlinedSvg,
      },
    ),
  );
};

DislikeOutlined.displayName = 'DislikeOutlined';

var DislikeTwoTone = function DislikeTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DislikeTwoToneSvg,
      },
    ),
  );
};

DislikeTwoTone.displayName = 'DislikeTwoTone';

var DollarCircleFilled = function DollarCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DollarCircleFilledSvg,
      },
    ),
  );
};

DollarCircleFilled.displayName = 'DollarCircleFilled';

var DollarCircleOutlined = function DollarCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DollarCircleOutlinedSvg,
      },
    ),
  );
};

DollarCircleOutlined.displayName = 'DollarCircleOutlined';

var DollarCircleTwoTone = function DollarCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DollarCircleTwoToneSvg,
      },
    ),
  );
};

DollarCircleTwoTone.displayName = 'DollarCircleTwoTone';

var DollarOutlined = function DollarOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DollarOutlinedSvg,
      },
    ),
  );
};

DollarOutlined.displayName = 'DollarOutlined';

var DollarTwoTone = function DollarTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DollarTwoToneSvg,
      },
    ),
  );
};

DollarTwoTone.displayName = 'DollarTwoTone';

var DotChartOutlined = function DotChartOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DotChartOutlinedSvg,
      },
    ),
  );
};

DotChartOutlined.displayName = 'DotChartOutlined';

var DoubleLeftOutlined = function DoubleLeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DoubleLeftOutlinedSvg,
      },
    ),
  );
};

DoubleLeftOutlined.displayName = 'DoubleLeftOutlined';

var DoubleRightOutlined = function DoubleRightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DoubleRightOutlinedSvg,
      },
    ),
  );
};

DoubleRightOutlined.displayName = 'DoubleRightOutlined';

var DownCircleFilled = function DownCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DownCircleFilledSvg,
      },
    ),
  );
};

DownCircleFilled.displayName = 'DownCircleFilled';

var DownCircleOutlined = function DownCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DownCircleOutlinedSvg,
      },
    ),
  );
};

DownCircleOutlined.displayName = 'DownCircleOutlined';

var DownCircleTwoTone = function DownCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DownCircleTwoToneSvg,
      },
    ),
  );
};

DownCircleTwoTone.displayName = 'DownCircleTwoTone';

var DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DownOutlinedSvg,
      },
    ),
  );
};

DownOutlined.displayName = 'DownOutlined';

var DownSquareFilled = function DownSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DownSquareFilledSvg,
      },
    ),
  );
};

DownSquareFilled.displayName = 'DownSquareFilled';

var DownSquareOutlined = function DownSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DownSquareOutlinedSvg,
      },
    ),
  );
};

DownSquareOutlined.displayName = 'DownSquareOutlined';

var DownSquareTwoTone = function DownSquareTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DownSquareTwoToneSvg,
      },
    ),
  );
};

DownSquareTwoTone.displayName = 'DownSquareTwoTone';

var DownloadOutlined = function DownloadOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DownloadOutlinedSvg,
      },
    ),
  );
};

DownloadOutlined.displayName = 'DownloadOutlined';

var DragOutlined = function DragOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DragOutlinedSvg,
      },
    ),
  );
};

DragOutlined.displayName = 'DragOutlined';

var DribbbleCircleFilled = function DribbbleCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DribbbleCircleFilledSvg,
      },
    ),
  );
};

DribbbleCircleFilled.displayName = 'DribbbleCircleFilled';

var DribbbleOutlined = function DribbbleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DribbbleOutlinedSvg,
      },
    ),
  );
};

DribbbleOutlined.displayName = 'DribbbleOutlined';

var DribbbleSquareFilled = function DribbbleSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DribbbleSquareFilledSvg,
      },
    ),
  );
};

DribbbleSquareFilled.displayName = 'DribbbleSquareFilled';

var DribbbleSquareOutlined = function DribbbleSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DribbbleSquareOutlinedSvg,
      },
    ),
  );
};

DribbbleSquareOutlined.displayName = 'DribbbleSquareOutlined';

var DropboxCircleFilled = function DropboxCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DropboxCircleFilledSvg,
      },
    ),
  );
};

DropboxCircleFilled.displayName = 'DropboxCircleFilled';

var DropboxOutlined = function DropboxOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DropboxOutlinedSvg,
      },
    ),
  );
};

DropboxOutlined.displayName = 'DropboxOutlined';

var DropboxSquareFilled = function DropboxSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: DropboxSquareFilledSvg,
      },
    ),
  );
};

DropboxSquareFilled.displayName = 'DropboxSquareFilled';

var EditFilled = function EditFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EditFilledSvg,
      },
    ),
  );
};

EditFilled.displayName = 'EditFilled';

var EditOutlined = function EditOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EditOutlinedSvg,
      },
    ),
  );
};

EditOutlined.displayName = 'EditOutlined';

var EditTwoTone = function EditTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EditTwoToneSvg,
      },
    ),
  );
};

EditTwoTone.displayName = 'EditTwoTone';

var EllipsisOutlined = function EllipsisOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EllipsisOutlinedSvg,
      },
    ),
  );
};

EllipsisOutlined.displayName = 'EllipsisOutlined';

var EnterOutlined = function EnterOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EnterOutlinedSvg,
      },
    ),
  );
};

EnterOutlined.displayName = 'EnterOutlined';

var EnvironmentFilled = function EnvironmentFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EnvironmentFilledSvg,
      },
    ),
  );
};

EnvironmentFilled.displayName = 'EnvironmentFilled';

var EnvironmentOutlined = function EnvironmentOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EnvironmentOutlinedSvg,
      },
    ),
  );
};

EnvironmentOutlined.displayName = 'EnvironmentOutlined';

var EnvironmentTwoTone = function EnvironmentTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EnvironmentTwoToneSvg,
      },
    ),
  );
};

EnvironmentTwoTone.displayName = 'EnvironmentTwoTone';

var EuroCircleFilled = function EuroCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EuroCircleFilledSvg,
      },
    ),
  );
};

EuroCircleFilled.displayName = 'EuroCircleFilled';

var EuroCircleOutlined = function EuroCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EuroCircleOutlinedSvg,
      },
    ),
  );
};

EuroCircleOutlined.displayName = 'EuroCircleOutlined';

var EuroCircleTwoTone = function EuroCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EuroCircleTwoToneSvg,
      },
    ),
  );
};

EuroCircleTwoTone.displayName = 'EuroCircleTwoTone';

var EuroOutlined = function EuroOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EuroOutlinedSvg,
      },
    ),
  );
};

EuroOutlined.displayName = 'EuroOutlined';

var EuroTwoTone = function EuroTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EuroTwoToneSvg,
      },
    ),
  );
};

EuroTwoTone.displayName = 'EuroTwoTone';

var ExceptionOutlined = function ExceptionOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExceptionOutlinedSvg,
      },
    ),
  );
};

ExceptionOutlined.displayName = 'ExceptionOutlined';

var ExclamationCircleFilled = function ExclamationCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExclamationCircleFilledSvg,
      },
    ),
  );
};

ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';

var ExclamationCircleOutlined = function ExclamationCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExclamationCircleOutlinedSvg,
      },
    ),
  );
};

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';

var ExclamationCircleTwoTone = function ExclamationCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExclamationCircleTwoToneSvg,
      },
    ),
  );
};

ExclamationCircleTwoTone.displayName = 'ExclamationCircleTwoTone';

var ExclamationOutlined = function ExclamationOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExclamationOutlinedSvg,
      },
    ),
  );
};

ExclamationOutlined.displayName = 'ExclamationOutlined';

var ExpandAltOutlined = function ExpandAltOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExpandAltOutlinedSvg,
      },
    ),
  );
};

ExpandAltOutlined.displayName = 'ExpandAltOutlined';

var ExpandOutlined = function ExpandOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExpandOutlinedSvg,
      },
    ),
  );
};

ExpandOutlined.displayName = 'ExpandOutlined';

var ExperimentFilled = function ExperimentFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExperimentFilledSvg,
      },
    ),
  );
};

ExperimentFilled.displayName = 'ExperimentFilled';

var ExperimentOutlined = function ExperimentOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExperimentOutlinedSvg,
      },
    ),
  );
};

ExperimentOutlined.displayName = 'ExperimentOutlined';

var ExperimentTwoTone = function ExperimentTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExperimentTwoToneSvg,
      },
    ),
  );
};

ExperimentTwoTone.displayName = 'ExperimentTwoTone';

var ExportOutlined = function ExportOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ExportOutlinedSvg,
      },
    ),
  );
};

ExportOutlined.displayName = 'ExportOutlined';

var EyeFilled = function EyeFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EyeFilledSvg,
      },
    ),
  );
};

EyeFilled.displayName = 'EyeFilled';

var EyeInvisibleFilled = function EyeInvisibleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EyeInvisibleFilledSvg,
      },
    ),
  );
};

EyeInvisibleFilled.displayName = 'EyeInvisibleFilled';

var EyeInvisibleOutlined = function EyeInvisibleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EyeInvisibleOutlinedSvg,
      },
    ),
  );
};

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';

var EyeInvisibleTwoTone = function EyeInvisibleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EyeInvisibleTwoToneSvg,
      },
    ),
  );
};

EyeInvisibleTwoTone.displayName = 'EyeInvisibleTwoTone';

var EyeOutlined = function EyeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EyeOutlinedSvg,
      },
    ),
  );
};

EyeOutlined.displayName = 'EyeOutlined';

var EyeTwoTone = function EyeTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: EyeTwoToneSvg,
      },
    ),
  );
};

EyeTwoTone.displayName = 'EyeTwoTone';

var FacebookFilled = function FacebookFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FacebookFilledSvg,
      },
    ),
  );
};

FacebookFilled.displayName = 'FacebookFilled';

var FacebookOutlined = function FacebookOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FacebookOutlinedSvg,
      },
    ),
  );
};

FacebookOutlined.displayName = 'FacebookOutlined';

var FallOutlined = function FallOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FallOutlinedSvg,
      },
    ),
  );
};

FallOutlined.displayName = 'FallOutlined';

var FastBackwardFilled = function FastBackwardFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FastBackwardFilledSvg,
      },
    ),
  );
};

FastBackwardFilled.displayName = 'FastBackwardFilled';

var FastBackwardOutlined = function FastBackwardOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FastBackwardOutlinedSvg,
      },
    ),
  );
};

FastBackwardOutlined.displayName = 'FastBackwardOutlined';

var FastForwardFilled = function FastForwardFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FastForwardFilledSvg,
      },
    ),
  );
};

FastForwardFilled.displayName = 'FastForwardFilled';

var FastForwardOutlined = function FastForwardOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FastForwardOutlinedSvg,
      },
    ),
  );
};

FastForwardOutlined.displayName = 'FastForwardOutlined';

var FieldBinaryOutlined = function FieldBinaryOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FieldBinaryOutlinedSvg,
      },
    ),
  );
};

FieldBinaryOutlined.displayName = 'FieldBinaryOutlined';

var FieldNumberOutlined = function FieldNumberOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FieldNumberOutlinedSvg,
      },
    ),
  );
};

FieldNumberOutlined.displayName = 'FieldNumberOutlined';

var FieldStringOutlined = function FieldStringOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FieldStringOutlinedSvg,
      },
    ),
  );
};

FieldStringOutlined.displayName = 'FieldStringOutlined';

var FieldTimeOutlined = function FieldTimeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FieldTimeOutlinedSvg,
      },
    ),
  );
};

FieldTimeOutlined.displayName = 'FieldTimeOutlined';

var FileAddFilled = function FileAddFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileAddFilledSvg,
      },
    ),
  );
};

FileAddFilled.displayName = 'FileAddFilled';

var FileAddOutlined = function FileAddOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileAddOutlinedSvg,
      },
    ),
  );
};

FileAddOutlined.displayName = 'FileAddOutlined';

var FileAddTwoTone = function FileAddTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileAddTwoToneSvg,
      },
    ),
  );
};

FileAddTwoTone.displayName = 'FileAddTwoTone';

var FileDoneOutlined = function FileDoneOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileDoneOutlinedSvg,
      },
    ),
  );
};

FileDoneOutlined.displayName = 'FileDoneOutlined';

var FileExcelFilled = function FileExcelFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileExcelFilledSvg,
      },
    ),
  );
};

FileExcelFilled.displayName = 'FileExcelFilled';

var FileExcelOutlined = function FileExcelOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileExcelOutlinedSvg,
      },
    ),
  );
};

FileExcelOutlined.displayName = 'FileExcelOutlined';

var FileExcelTwoTone = function FileExcelTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileExcelTwoToneSvg,
      },
    ),
  );
};

FileExcelTwoTone.displayName = 'FileExcelTwoTone';

var FileExclamationFilled = function FileExclamationFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileExclamationFilledSvg,
      },
    ),
  );
};

FileExclamationFilled.displayName = 'FileExclamationFilled';

var FileExclamationOutlined = function FileExclamationOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileExclamationOutlinedSvg,
      },
    ),
  );
};

FileExclamationOutlined.displayName = 'FileExclamationOutlined';

var FileExclamationTwoTone = function FileExclamationTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileExclamationTwoToneSvg,
      },
    ),
  );
};

FileExclamationTwoTone.displayName = 'FileExclamationTwoTone';

var FileFilled = function FileFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileFilledSvg,
      },
    ),
  );
};

FileFilled.displayName = 'FileFilled';

var FileGifOutlined = function FileGifOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileGifOutlinedSvg,
      },
    ),
  );
};

FileGifOutlined.displayName = 'FileGifOutlined';

var FileImageFilled = function FileImageFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileImageFilledSvg,
      },
    ),
  );
};

FileImageFilled.displayName = 'FileImageFilled';

var FileImageOutlined = function FileImageOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileImageOutlinedSvg,
      },
    ),
  );
};

FileImageOutlined.displayName = 'FileImageOutlined';

var FileImageTwoTone = function FileImageTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileImageTwoToneSvg,
      },
    ),
  );
};

FileImageTwoTone.displayName = 'FileImageTwoTone';

var FileJpgOutlined = function FileJpgOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileJpgOutlinedSvg,
      },
    ),
  );
};

FileJpgOutlined.displayName = 'FileJpgOutlined';

var FileMarkdownFilled = function FileMarkdownFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileMarkdownFilledSvg,
      },
    ),
  );
};

FileMarkdownFilled.displayName = 'FileMarkdownFilled';

var FileMarkdownOutlined = function FileMarkdownOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileMarkdownOutlinedSvg,
      },
    ),
  );
};

FileMarkdownOutlined.displayName = 'FileMarkdownOutlined';

var FileMarkdownTwoTone = function FileMarkdownTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileMarkdownTwoToneSvg,
      },
    ),
  );
};

FileMarkdownTwoTone.displayName = 'FileMarkdownTwoTone';

var FileOutlined = function FileOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileOutlinedSvg,
      },
    ),
  );
};

FileOutlined.displayName = 'FileOutlined';

var FilePdfFilled = function FilePdfFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FilePdfFilledSvg,
      },
    ),
  );
};

FilePdfFilled.displayName = 'FilePdfFilled';

var FilePdfOutlined = function FilePdfOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FilePdfOutlinedSvg,
      },
    ),
  );
};

FilePdfOutlined.displayName = 'FilePdfOutlined';

var FilePdfTwoTone = function FilePdfTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FilePdfTwoToneSvg,
      },
    ),
  );
};

FilePdfTwoTone.displayName = 'FilePdfTwoTone';

var FilePptFilled = function FilePptFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FilePptFilledSvg,
      },
    ),
  );
};

FilePptFilled.displayName = 'FilePptFilled';

var FilePptOutlined = function FilePptOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FilePptOutlinedSvg,
      },
    ),
  );
};

FilePptOutlined.displayName = 'FilePptOutlined';

var FilePptTwoTone = function FilePptTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FilePptTwoToneSvg,
      },
    ),
  );
};

FilePptTwoTone.displayName = 'FilePptTwoTone';

var FileProtectOutlined = function FileProtectOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileProtectOutlinedSvg,
      },
    ),
  );
};

FileProtectOutlined.displayName = 'FileProtectOutlined';

var FileSearchOutlined = function FileSearchOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileSearchOutlinedSvg,
      },
    ),
  );
};

FileSearchOutlined.displayName = 'FileSearchOutlined';

var FileSyncOutlined = function FileSyncOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileSyncOutlinedSvg,
      },
    ),
  );
};

FileSyncOutlined.displayName = 'FileSyncOutlined';

var FileTextFilled = function FileTextFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileTextFilledSvg,
      },
    ),
  );
};

FileTextFilled.displayName = 'FileTextFilled';

var FileTextOutlined = function FileTextOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileTextOutlinedSvg,
      },
    ),
  );
};

FileTextOutlined.displayName = 'FileTextOutlined';

var FileTextTwoTone = function FileTextTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileTextTwoToneSvg,
      },
    ),
  );
};

FileTextTwoTone.displayName = 'FileTextTwoTone';

var FileTwoTone = function FileTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileTwoToneSvg,
      },
    ),
  );
};

FileTwoTone.displayName = 'FileTwoTone';

var FileUnknownFilled = function FileUnknownFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileUnknownFilledSvg,
      },
    ),
  );
};

FileUnknownFilled.displayName = 'FileUnknownFilled';

var FileUnknownOutlined = function FileUnknownOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileUnknownOutlinedSvg,
      },
    ),
  );
};

FileUnknownOutlined.displayName = 'FileUnknownOutlined';

var FileUnknownTwoTone = function FileUnknownTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileUnknownTwoToneSvg,
      },
    ),
  );
};

FileUnknownTwoTone.displayName = 'FileUnknownTwoTone';

var FileWordFilled = function FileWordFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileWordFilledSvg,
      },
    ),
  );
};

FileWordFilled.displayName = 'FileWordFilled';

var FileWordOutlined = function FileWordOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileWordOutlinedSvg,
      },
    ),
  );
};

FileWordOutlined.displayName = 'FileWordOutlined';

var FileWordTwoTone = function FileWordTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileWordTwoToneSvg,
      },
    ),
  );
};

FileWordTwoTone.displayName = 'FileWordTwoTone';

var FileZipFilled = function FileZipFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileZipFilledSvg,
      },
    ),
  );
};

FileZipFilled.displayName = 'FileZipFilled';

var FileZipOutlined = function FileZipOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileZipOutlinedSvg,
      },
    ),
  );
};

FileZipOutlined.displayName = 'FileZipOutlined';

var FileZipTwoTone = function FileZipTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FileZipTwoToneSvg,
      },
    ),
  );
};

FileZipTwoTone.displayName = 'FileZipTwoTone';

var FilterFilled = function FilterFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FilterFilledSvg,
      },
    ),
  );
};

FilterFilled.displayName = 'FilterFilled';

var FilterOutlined = function FilterOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FilterOutlinedSvg,
      },
    ),
  );
};

FilterOutlined.displayName = 'FilterOutlined';

var FilterTwoTone = function FilterTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FilterTwoToneSvg,
      },
    ),
  );
};

FilterTwoTone.displayName = 'FilterTwoTone';

var FireFilled = function FireFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FireFilledSvg,
      },
    ),
  );
};

FireFilled.displayName = 'FireFilled';

var FireOutlined = function FireOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FireOutlinedSvg,
      },
    ),
  );
};

FireOutlined.displayName = 'FireOutlined';

var FireTwoTone = function FireTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FireTwoToneSvg,
      },
    ),
  );
};

FireTwoTone.displayName = 'FireTwoTone';

var FlagFilled = function FlagFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FlagFilledSvg,
      },
    ),
  );
};

FlagFilled.displayName = 'FlagFilled';

var FlagOutlined = function FlagOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FlagOutlinedSvg,
      },
    ),
  );
};

FlagOutlined.displayName = 'FlagOutlined';

var FlagTwoTone = function FlagTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FlagTwoToneSvg,
      },
    ),
  );
};

FlagTwoTone.displayName = 'FlagTwoTone';

var FolderAddFilled = function FolderAddFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FolderAddFilledSvg,
      },
    ),
  );
};

FolderAddFilled.displayName = 'FolderAddFilled';

var FolderAddOutlined = function FolderAddOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FolderAddOutlinedSvg,
      },
    ),
  );
};

FolderAddOutlined.displayName = 'FolderAddOutlined';

var FolderAddTwoTone = function FolderAddTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FolderAddTwoToneSvg,
      },
    ),
  );
};

FolderAddTwoTone.displayName = 'FolderAddTwoTone';

var FolderFilled = function FolderFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FolderFilledSvg,
      },
    ),
  );
};

FolderFilled.displayName = 'FolderFilled';

var FolderOpenFilled = function FolderOpenFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FolderOpenFilledSvg,
      },
    ),
  );
};

FolderOpenFilled.displayName = 'FolderOpenFilled';

var FolderOpenOutlined = function FolderOpenOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FolderOpenOutlinedSvg,
      },
    ),
  );
};

FolderOpenOutlined.displayName = 'FolderOpenOutlined';

var FolderOpenTwoTone = function FolderOpenTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FolderOpenTwoToneSvg,
      },
    ),
  );
};

FolderOpenTwoTone.displayName = 'FolderOpenTwoTone';

var FolderOutlined = function FolderOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FolderOutlinedSvg,
      },
    ),
  );
};

FolderOutlined.displayName = 'FolderOutlined';

var FolderTwoTone = function FolderTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FolderTwoToneSvg,
      },
    ),
  );
};

FolderTwoTone.displayName = 'FolderTwoTone';

var FolderViewOutlined = function FolderViewOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FolderViewOutlinedSvg,
      },
    ),
  );
};

FolderViewOutlined.displayName = 'FolderViewOutlined';

var FontColorsOutlined = function FontColorsOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FontColorsOutlinedSvg,
      },
    ),
  );
};

FontColorsOutlined.displayName = 'FontColorsOutlined';

var FontSizeOutlined = function FontSizeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FontSizeOutlinedSvg,
      },
    ),
  );
};

FontSizeOutlined.displayName = 'FontSizeOutlined';

var ForkOutlined = function ForkOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ForkOutlinedSvg,
      },
    ),
  );
};

ForkOutlined.displayName = 'ForkOutlined';

var FormOutlined = function FormOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FormOutlinedSvg,
      },
    ),
  );
};

FormOutlined.displayName = 'FormOutlined';

var FormatPainterFilled = function FormatPainterFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FormatPainterFilledSvg,
      },
    ),
  );
};

FormatPainterFilled.displayName = 'FormatPainterFilled';

var FormatPainterOutlined = function FormatPainterOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FormatPainterOutlinedSvg,
      },
    ),
  );
};

FormatPainterOutlined.displayName = 'FormatPainterOutlined';

var ForwardFilled = function ForwardFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ForwardFilledSvg,
      },
    ),
  );
};

ForwardFilled.displayName = 'ForwardFilled';

var ForwardOutlined = function ForwardOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ForwardOutlinedSvg,
      },
    ),
  );
};

ForwardOutlined.displayName = 'ForwardOutlined';

var FrownFilled = function FrownFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FrownFilledSvg,
      },
    ),
  );
};

FrownFilled.displayName = 'FrownFilled';

var FrownOutlined = function FrownOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FrownOutlinedSvg,
      },
    ),
  );
};

FrownOutlined.displayName = 'FrownOutlined';

var FrownTwoTone = function FrownTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FrownTwoToneSvg,
      },
    ),
  );
};

FrownTwoTone.displayName = 'FrownTwoTone';

var FullscreenExitOutlined = function FullscreenExitOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FullscreenExitOutlinedSvg,
      },
    ),
  );
};

FullscreenExitOutlined.displayName = 'FullscreenExitOutlined';

var FullscreenOutlined = function FullscreenOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FullscreenOutlinedSvg,
      },
    ),
  );
};

FullscreenOutlined.displayName = 'FullscreenOutlined';

var FunctionOutlined = function FunctionOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FunctionOutlinedSvg,
      },
    ),
  );
};

FunctionOutlined.displayName = 'FunctionOutlined';

var FundFilled = function FundFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FundFilledSvg,
      },
    ),
  );
};

FundFilled.displayName = 'FundFilled';

var FundOutlined = function FundOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FundOutlinedSvg,
      },
    ),
  );
};

FundOutlined.displayName = 'FundOutlined';

var FundProjectionScreenOutlined = function FundProjectionScreenOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FundProjectionScreenOutlinedSvg,
      },
    ),
  );
};

FundProjectionScreenOutlined.displayName = 'FundProjectionScreenOutlined';

var FundTwoTone = function FundTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FundTwoToneSvg,
      },
    ),
  );
};

FundTwoTone.displayName = 'FundTwoTone';

var FundViewOutlined = function FundViewOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FundViewOutlinedSvg,
      },
    ),
  );
};

FundViewOutlined.displayName = 'FundViewOutlined';

var FunnelPlotFilled = function FunnelPlotFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FunnelPlotFilledSvg,
      },
    ),
  );
};

FunnelPlotFilled.displayName = 'FunnelPlotFilled';

var FunnelPlotOutlined = function FunnelPlotOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FunnelPlotOutlinedSvg,
      },
    ),
  );
};

FunnelPlotOutlined.displayName = 'FunnelPlotOutlined';

var FunnelPlotTwoTone = function FunnelPlotTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: FunnelPlotTwoToneSvg,
      },
    ),
  );
};

FunnelPlotTwoTone.displayName = 'FunnelPlotTwoTone';

var GatewayOutlined = function GatewayOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GatewayOutlinedSvg,
      },
    ),
  );
};

GatewayOutlined.displayName = 'GatewayOutlined';

var GifOutlined = function GifOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GifOutlinedSvg,
      },
    ),
  );
};

GifOutlined.displayName = 'GifOutlined';

var GiftFilled = function GiftFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GiftFilledSvg,
      },
    ),
  );
};

GiftFilled.displayName = 'GiftFilled';

var GiftOutlined = function GiftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GiftOutlinedSvg,
      },
    ),
  );
};

GiftOutlined.displayName = 'GiftOutlined';

var GiftTwoTone = function GiftTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GiftTwoToneSvg,
      },
    ),
  );
};

GiftTwoTone.displayName = 'GiftTwoTone';

var GithubFilled = function GithubFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GithubFilledSvg,
      },
    ),
  );
};

GithubFilled.displayName = 'GithubFilled';

var GithubOutlined = function GithubOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GithubOutlinedSvg,
      },
    ),
  );
};

GithubOutlined.displayName = 'GithubOutlined';

var GitlabFilled = function GitlabFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GitlabFilledSvg,
      },
    ),
  );
};

GitlabFilled.displayName = 'GitlabFilled';

var GitlabOutlined = function GitlabOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GitlabOutlinedSvg,
      },
    ),
  );
};

GitlabOutlined.displayName = 'GitlabOutlined';

var GlobalOutlined = function GlobalOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GlobalOutlinedSvg,
      },
    ),
  );
};

GlobalOutlined.displayName = 'GlobalOutlined';

var GoldFilled = function GoldFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GoldFilledSvg,
      },
    ),
  );
};

GoldFilled.displayName = 'GoldFilled';

var GoldOutlined = function GoldOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GoldOutlinedSvg,
      },
    ),
  );
};

GoldOutlined.displayName = 'GoldOutlined';

var GoldTwoTone = function GoldTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GoldTwoToneSvg,
      },
    ),
  );
};

GoldTwoTone.displayName = 'GoldTwoTone';

var GoldenFilled = function GoldenFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GoldenFilledSvg,
      },
    ),
  );
};

GoldenFilled.displayName = 'GoldenFilled';

var GoogleCircleFilled = function GoogleCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GoogleCircleFilledSvg,
      },
    ),
  );
};

GoogleCircleFilled.displayName = 'GoogleCircleFilled';

var GoogleOutlined = function GoogleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GoogleOutlinedSvg,
      },
    ),
  );
};

GoogleOutlined.displayName = 'GoogleOutlined';

var GooglePlusCircleFilled = function GooglePlusCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GooglePlusCircleFilledSvg,
      },
    ),
  );
};

GooglePlusCircleFilled.displayName = 'GooglePlusCircleFilled';

var GooglePlusOutlined = function GooglePlusOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GooglePlusOutlinedSvg,
      },
    ),
  );
};

GooglePlusOutlined.displayName = 'GooglePlusOutlined';

var GooglePlusSquareFilled = function GooglePlusSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GooglePlusSquareFilledSvg,
      },
    ),
  );
};

GooglePlusSquareFilled.displayName = 'GooglePlusSquareFilled';

var GoogleSquareFilled = function GoogleSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GoogleSquareFilledSvg,
      },
    ),
  );
};

GoogleSquareFilled.displayName = 'GoogleSquareFilled';

var GroupOutlined = function GroupOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: GroupOutlinedSvg,
      },
    ),
  );
};

GroupOutlined.displayName = 'GroupOutlined';

var HddFilled = function HddFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HddFilledSvg,
      },
    ),
  );
};

HddFilled.displayName = 'HddFilled';

var HddOutlined = function HddOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HddOutlinedSvg,
      },
    ),
  );
};

HddOutlined.displayName = 'HddOutlined';

var HddTwoTone = function HddTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HddTwoToneSvg,
      },
    ),
  );
};

HddTwoTone.displayName = 'HddTwoTone';

var HeartFilled = function HeartFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HeartFilledSvg,
      },
    ),
  );
};

HeartFilled.displayName = 'HeartFilled';

var HeartOutlined = function HeartOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HeartOutlinedSvg,
      },
    ),
  );
};

HeartOutlined.displayName = 'HeartOutlined';

var HeartTwoTone = function HeartTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HeartTwoToneSvg,
      },
    ),
  );
};

HeartTwoTone.displayName = 'HeartTwoTone';

var HeatMapOutlined = function HeatMapOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HeatMapOutlinedSvg,
      },
    ),
  );
};

HeatMapOutlined.displayName = 'HeatMapOutlined';

var HighlightFilled = function HighlightFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HighlightFilledSvg,
      },
    ),
  );
};

HighlightFilled.displayName = 'HighlightFilled';

var HighlightOutlined = function HighlightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HighlightOutlinedSvg,
      },
    ),
  );
};

HighlightOutlined.displayName = 'HighlightOutlined';

var HighlightTwoTone = function HighlightTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HighlightTwoToneSvg,
      },
    ),
  );
};

HighlightTwoTone.displayName = 'HighlightTwoTone';

var HistoryOutlined = function HistoryOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HistoryOutlinedSvg,
      },
    ),
  );
};

HistoryOutlined.displayName = 'HistoryOutlined';

var HolderOutlined = function HolderOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HolderOutlinedSvg,
      },
    ),
  );
};

HolderOutlined.displayName = 'HolderOutlined';

var HomeFilled = function HomeFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HomeFilledSvg,
      },
    ),
  );
};

HomeFilled.displayName = 'HomeFilled';

var HomeOutlined = function HomeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HomeOutlinedSvg,
      },
    ),
  );
};

HomeOutlined.displayName = 'HomeOutlined';

var HomeTwoTone = function HomeTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HomeTwoToneSvg,
      },
    ),
  );
};

HomeTwoTone.displayName = 'HomeTwoTone';

var HourglassFilled = function HourglassFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HourglassFilledSvg,
      },
    ),
  );
};

HourglassFilled.displayName = 'HourglassFilled';

var HourglassOutlined = function HourglassOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HourglassOutlinedSvg,
      },
    ),
  );
};

HourglassOutlined.displayName = 'HourglassOutlined';

var HourglassTwoTone = function HourglassTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: HourglassTwoToneSvg,
      },
    ),
  );
};

HourglassTwoTone.displayName = 'HourglassTwoTone';

var Html5Filled = function Html5Filled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: Html5FilledSvg,
      },
    ),
  );
};

Html5Filled.displayName = 'Html5Filled';

var Html5Outlined = function Html5Outlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: Html5OutlinedSvg,
      },
    ),
  );
};

Html5Outlined.displayName = 'Html5Outlined';

var Html5TwoTone = function Html5TwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: Html5TwoToneSvg,
      },
    ),
  );
};

Html5TwoTone.displayName = 'Html5TwoTone';

var IdcardFilled = function IdcardFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: IdcardFilledSvg,
      },
    ),
  );
};

IdcardFilled.displayName = 'IdcardFilled';

var IdcardOutlined = function IdcardOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: IdcardOutlinedSvg,
      },
    ),
  );
};

IdcardOutlined.displayName = 'IdcardOutlined';

var IdcardTwoTone = function IdcardTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: IdcardTwoToneSvg,
      },
    ),
  );
};

IdcardTwoTone.displayName = 'IdcardTwoTone';

var IeCircleFilled = function IeCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: IeCircleFilledSvg,
      },
    ),
  );
};

IeCircleFilled.displayName = 'IeCircleFilled';

var IeOutlined = function IeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: IeOutlinedSvg,
      },
    ),
  );
};

IeOutlined.displayName = 'IeOutlined';

var IeSquareFilled = function IeSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: IeSquareFilledSvg,
      },
    ),
  );
};

IeSquareFilled.displayName = 'IeSquareFilled';

var ImportOutlined = function ImportOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ImportOutlinedSvg,
      },
    ),
  );
};

ImportOutlined.displayName = 'ImportOutlined';

var InboxOutlined = function InboxOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InboxOutlinedSvg,
      },
    ),
  );
};

InboxOutlined.displayName = 'InboxOutlined';

var InfoCircleFilled = function InfoCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InfoCircleFilledSvg,
      },
    ),
  );
};

InfoCircleFilled.displayName = 'InfoCircleFilled';

var InfoCircleOutlined = function InfoCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InfoCircleOutlinedSvg,
      },
    ),
  );
};

InfoCircleOutlined.displayName = 'InfoCircleOutlined';

var InfoCircleTwoTone = function InfoCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InfoCircleTwoToneSvg,
      },
    ),
  );
};

InfoCircleTwoTone.displayName = 'InfoCircleTwoTone';

var InfoOutlined = function InfoOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InfoOutlinedSvg,
      },
    ),
  );
};

InfoOutlined.displayName = 'InfoOutlined';

var InsertRowAboveOutlined = function InsertRowAboveOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InsertRowAboveOutlinedSvg,
      },
    ),
  );
};

InsertRowAboveOutlined.displayName = 'InsertRowAboveOutlined';

var InsertRowBelowOutlined = function InsertRowBelowOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InsertRowBelowOutlinedSvg,
      },
    ),
  );
};

InsertRowBelowOutlined.displayName = 'InsertRowBelowOutlined';

var InsertRowLeftOutlined = function InsertRowLeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InsertRowLeftOutlinedSvg,
      },
    ),
  );
};

InsertRowLeftOutlined.displayName = 'InsertRowLeftOutlined';

var InsertRowRightOutlined = function InsertRowRightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InsertRowRightOutlinedSvg,
      },
    ),
  );
};

InsertRowRightOutlined.displayName = 'InsertRowRightOutlined';

var InstagramFilled = function InstagramFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InstagramFilledSvg,
      },
    ),
  );
};

InstagramFilled.displayName = 'InstagramFilled';

var InstagramOutlined = function InstagramOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InstagramOutlinedSvg,
      },
    ),
  );
};

InstagramOutlined.displayName = 'InstagramOutlined';

var InsuranceFilled = function InsuranceFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InsuranceFilledSvg,
      },
    ),
  );
};

InsuranceFilled.displayName = 'InsuranceFilled';

var InsuranceOutlined = function InsuranceOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InsuranceOutlinedSvg,
      },
    ),
  );
};

InsuranceOutlined.displayName = 'InsuranceOutlined';

var InsuranceTwoTone = function InsuranceTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InsuranceTwoToneSvg,
      },
    ),
  );
};

InsuranceTwoTone.displayName = 'InsuranceTwoTone';

var InteractionFilled = function InteractionFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InteractionFilledSvg,
      },
    ),
  );
};

InteractionFilled.displayName = 'InteractionFilled';

var InteractionOutlined = function InteractionOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InteractionOutlinedSvg,
      },
    ),
  );
};

InteractionOutlined.displayName = 'InteractionOutlined';

var InteractionTwoTone = function InteractionTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: InteractionTwoToneSvg,
      },
    ),
  );
};

InteractionTwoTone.displayName = 'InteractionTwoTone';

var IssuesCloseOutlined = function IssuesCloseOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: IssuesCloseOutlinedSvg,
      },
    ),
  );
};

IssuesCloseOutlined.displayName = 'IssuesCloseOutlined';

var ItalicOutlined = function ItalicOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ItalicOutlinedSvg,
      },
    ),
  );
};

ItalicOutlined.displayName = 'ItalicOutlined';

var KeyOutlined = function KeyOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: KeyOutlinedSvg,
      },
    ),
  );
};

KeyOutlined.displayName = 'KeyOutlined';

var LaptopOutlined = function LaptopOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LaptopOutlinedSvg,
      },
    ),
  );
};

LaptopOutlined.displayName = 'LaptopOutlined';

var LayoutFilled = function LayoutFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LayoutFilledSvg,
      },
    ),
  );
};

LayoutFilled.displayName = 'LayoutFilled';

var LayoutOutlined = function LayoutOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LayoutOutlinedSvg,
      },
    ),
  );
};

LayoutOutlined.displayName = 'LayoutOutlined';

var LayoutTwoTone = function LayoutTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LayoutTwoToneSvg,
      },
    ),
  );
};

LayoutTwoTone.displayName = 'LayoutTwoTone';

var LeftCircleFilled = function LeftCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LeftCircleFilledSvg,
      },
    ),
  );
};

LeftCircleFilled.displayName = 'LeftCircleFilled';

var LeftCircleOutlined = function LeftCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LeftCircleOutlinedSvg,
      },
    ),
  );
};

LeftCircleOutlined.displayName = 'LeftCircleOutlined';

var LeftCircleTwoTone = function LeftCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LeftCircleTwoToneSvg,
      },
    ),
  );
};

LeftCircleTwoTone.displayName = 'LeftCircleTwoTone';

var LeftOutlined = function LeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LeftOutlinedSvg,
      },
    ),
  );
};

LeftOutlined.displayName = 'LeftOutlined';

var LeftSquareFilled = function LeftSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LeftSquareFilledSvg,
      },
    ),
  );
};

LeftSquareFilled.displayName = 'LeftSquareFilled';

var LeftSquareOutlined = function LeftSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LeftSquareOutlinedSvg,
      },
    ),
  );
};

LeftSquareOutlined.displayName = 'LeftSquareOutlined';

var LeftSquareTwoTone = function LeftSquareTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LeftSquareTwoToneSvg,
      },
    ),
  );
};

LeftSquareTwoTone.displayName = 'LeftSquareTwoTone';

var LikeFilled = function LikeFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LikeFilledSvg,
      },
    ),
  );
};

LikeFilled.displayName = 'LikeFilled';

var LikeOutlined = function LikeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LikeOutlinedSvg,
      },
    ),
  );
};

LikeOutlined.displayName = 'LikeOutlined';

var LikeTwoTone = function LikeTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LikeTwoToneSvg,
      },
    ),
  );
};

LikeTwoTone.displayName = 'LikeTwoTone';

var LineChartOutlined = function LineChartOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LineChartOutlinedSvg,
      },
    ),
  );
};

LineChartOutlined.displayName = 'LineChartOutlined';

var LineHeightOutlined = function LineHeightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LineHeightOutlinedSvg,
      },
    ),
  );
};

LineHeightOutlined.displayName = 'LineHeightOutlined';

var LineOutlined = function LineOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LineOutlinedSvg,
      },
    ),
  );
};

LineOutlined.displayName = 'LineOutlined';

var LinkOutlined = function LinkOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LinkOutlinedSvg,
      },
    ),
  );
};

LinkOutlined.displayName = 'LinkOutlined';

var LinkedinFilled = function LinkedinFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LinkedinFilledSvg,
      },
    ),
  );
};

LinkedinFilled.displayName = 'LinkedinFilled';

var LinkedinOutlined = function LinkedinOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LinkedinOutlinedSvg,
      },
    ),
  );
};

LinkedinOutlined.displayName = 'LinkedinOutlined';

var Loading3QuartersOutlined = function Loading3QuartersOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: Loading3QuartersOutlinedSvg,
      },
    ),
  );
};

Loading3QuartersOutlined.displayName = 'Loading3QuartersOutlined';

var LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LoadingOutlinedSvg,
      },
    ),
  );
};

LoadingOutlined.displayName = 'LoadingOutlined';

var LockFilled = function LockFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LockFilledSvg,
      },
    ),
  );
};

LockFilled.displayName = 'LockFilled';

var LockOutlined = function LockOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LockOutlinedSvg,
      },
    ),
  );
};

LockOutlined.displayName = 'LockOutlined';

var LockTwoTone = function LockTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LockTwoToneSvg,
      },
    ),
  );
};

LockTwoTone.displayName = 'LockTwoTone';

var LoginOutlined = function LoginOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LoginOutlinedSvg,
      },
    ),
  );
};

LoginOutlined.displayName = 'LoginOutlined';

var LogoutOutlined = function LogoutOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: LogoutOutlinedSvg,
      },
    ),
  );
};

LogoutOutlined.displayName = 'LogoutOutlined';

var MacCommandFilled = function MacCommandFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MacCommandFilledSvg,
      },
    ),
  );
};

MacCommandFilled.displayName = 'MacCommandFilled';

var MacCommandOutlined = function MacCommandOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MacCommandOutlinedSvg,
      },
    ),
  );
};

MacCommandOutlined.displayName = 'MacCommandOutlined';

var MailFilled = function MailFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MailFilledSvg,
      },
    ),
  );
};

MailFilled.displayName = 'MailFilled';

var MailOutlined = function MailOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MailOutlinedSvg,
      },
    ),
  );
};

MailOutlined.displayName = 'MailOutlined';

var MailTwoTone = function MailTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MailTwoToneSvg,
      },
    ),
  );
};

MailTwoTone.displayName = 'MailTwoTone';

var ManOutlined = function ManOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ManOutlinedSvg,
      },
    ),
  );
};

ManOutlined.displayName = 'ManOutlined';

var MedicineBoxFilled = function MedicineBoxFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MedicineBoxFilledSvg,
      },
    ),
  );
};

MedicineBoxFilled.displayName = 'MedicineBoxFilled';

var MedicineBoxOutlined = function MedicineBoxOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MedicineBoxOutlinedSvg,
      },
    ),
  );
};

MedicineBoxOutlined.displayName = 'MedicineBoxOutlined';

var MedicineBoxTwoTone = function MedicineBoxTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MedicineBoxTwoToneSvg,
      },
    ),
  );
};

MedicineBoxTwoTone.displayName = 'MedicineBoxTwoTone';

var MediumCircleFilled = function MediumCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MediumCircleFilledSvg,
      },
    ),
  );
};

MediumCircleFilled.displayName = 'MediumCircleFilled';

var MediumOutlined = function MediumOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MediumOutlinedSvg,
      },
    ),
  );
};

MediumOutlined.displayName = 'MediumOutlined';

var MediumSquareFilled = function MediumSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MediumSquareFilledSvg,
      },
    ),
  );
};

MediumSquareFilled.displayName = 'MediumSquareFilled';

var MediumWorkmarkOutlined = function MediumWorkmarkOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MediumWorkmarkOutlinedSvg,
      },
    ),
  );
};

MediumWorkmarkOutlined.displayName = 'MediumWorkmarkOutlined';

var MehFilled = function MehFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MehFilledSvg,
      },
    ),
  );
};

MehFilled.displayName = 'MehFilled';

var MehOutlined = function MehOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MehOutlinedSvg,
      },
    ),
  );
};

MehOutlined.displayName = 'MehOutlined';

var MehTwoTone = function MehTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MehTwoToneSvg,
      },
    ),
  );
};

MehTwoTone.displayName = 'MehTwoTone';

var MenuFoldOutlined = function MenuFoldOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MenuFoldOutlinedSvg,
      },
    ),
  );
};

MenuFoldOutlined.displayName = 'MenuFoldOutlined';

var MenuOutlined = function MenuOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MenuOutlinedSvg,
      },
    ),
  );
};

MenuOutlined.displayName = 'MenuOutlined';
var MenuOutlined$1 = /*#__PURE__*/ React.forwardRef(MenuOutlined);

var MenuUnfoldOutlined = function MenuUnfoldOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MenuUnfoldOutlinedSvg,
      },
    ),
  );
};

MenuUnfoldOutlined.displayName = 'MenuUnfoldOutlined';

var MergeCellsOutlined = function MergeCellsOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MergeCellsOutlinedSvg,
      },
    ),
  );
};

MergeCellsOutlined.displayName = 'MergeCellsOutlined';

var MessageFilled = function MessageFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MessageFilledSvg,
      },
    ),
  );
};

MessageFilled.displayName = 'MessageFilled';

var MessageOutlined = function MessageOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MessageOutlinedSvg,
      },
    ),
  );
};

MessageOutlined.displayName = 'MessageOutlined';

var MessageTwoTone = function MessageTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MessageTwoToneSvg,
      },
    ),
  );
};

MessageTwoTone.displayName = 'MessageTwoTone';

var MinusCircleFilled = function MinusCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MinusCircleFilledSvg,
      },
    ),
  );
};

MinusCircleFilled.displayName = 'MinusCircleFilled';

var MinusCircleOutlined = function MinusCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MinusCircleOutlinedSvg,
      },
    ),
  );
};

MinusCircleOutlined.displayName = 'MinusCircleOutlined';

var MinusCircleTwoTone = function MinusCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MinusCircleTwoToneSvg,
      },
    ),
  );
};

MinusCircleTwoTone.displayName = 'MinusCircleTwoTone';

var MinusOutlined = function MinusOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MinusOutlinedSvg,
      },
    ),
  );
};

MinusOutlined.displayName = 'MinusOutlined';

var MinusSquareFilled = function MinusSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MinusSquareFilledSvg,
      },
    ),
  );
};

MinusSquareFilled.displayName = 'MinusSquareFilled';

var MinusSquareOutlined = function MinusSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MinusSquareOutlinedSvg,
      },
    ),
  );
};

MinusSquareOutlined.displayName = 'MinusSquareOutlined';

var MinusSquareTwoTone = function MinusSquareTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MinusSquareTwoToneSvg,
      },
    ),
  );
};

MinusSquareTwoTone.displayName = 'MinusSquareTwoTone';

var MobileFilled = function MobileFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MobileFilledSvg,
      },
    ),
  );
};

MobileFilled.displayName = 'MobileFilled';

var MobileOutlined = function MobileOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MobileOutlinedSvg,
      },
    ),
  );
};

MobileOutlined.displayName = 'MobileOutlined';

var MobileTwoTone = function MobileTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MobileTwoToneSvg,
      },
    ),
  );
};

MobileTwoTone.displayName = 'MobileTwoTone';

var MoneyCollectFilled = function MoneyCollectFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MoneyCollectFilledSvg,
      },
    ),
  );
};

MoneyCollectFilled.displayName = 'MoneyCollectFilled';

var MoneyCollectOutlined = function MoneyCollectOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MoneyCollectOutlinedSvg,
      },
    ),
  );
};

MoneyCollectOutlined.displayName = 'MoneyCollectOutlined';

var MoneyCollectTwoTone = function MoneyCollectTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MoneyCollectTwoToneSvg,
      },
    ),
  );
};

MoneyCollectTwoTone.displayName = 'MoneyCollectTwoTone';

var MonitorOutlined = function MonitorOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MonitorOutlinedSvg,
      },
    ),
  );
};

MonitorOutlined.displayName = 'MonitorOutlined';

var MoreOutlined = function MoreOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: MoreOutlinedSvg,
      },
    ),
  );
};

MoreOutlined.displayName = 'MoreOutlined';

var NodeCollapseOutlined = function NodeCollapseOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: NodeCollapseOutlinedSvg,
      },
    ),
  );
};

NodeCollapseOutlined.displayName = 'NodeCollapseOutlined';

var NodeExpandOutlined = function NodeExpandOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: NodeExpandOutlinedSvg,
      },
    ),
  );
};

NodeExpandOutlined.displayName = 'NodeExpandOutlined';

var NodeIndexOutlined = function NodeIndexOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: NodeIndexOutlinedSvg,
      },
    ),
  );
};

NodeIndexOutlined.displayName = 'NodeIndexOutlined';

var NotificationFilled = function NotificationFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: NotificationFilledSvg,
      },
    ),
  );
};

NotificationFilled.displayName = 'NotificationFilled';

var NotificationOutlined = function NotificationOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: NotificationOutlinedSvg,
      },
    ),
  );
};

NotificationOutlined.displayName = 'NotificationOutlined';

var NotificationTwoTone = function NotificationTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: NotificationTwoToneSvg,
      },
    ),
  );
};

NotificationTwoTone.displayName = 'NotificationTwoTone';

var NumberOutlined = function NumberOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: NumberOutlinedSvg,
      },
    ),
  );
};

NumberOutlined.displayName = 'NumberOutlined';

var OneToOneOutlined = function OneToOneOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: OneToOneOutlinedSvg,
      },
    ),
  );
};

OneToOneOutlined.displayName = 'OneToOneOutlined';

var OrderedListOutlined = function OrderedListOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: OrderedListOutlinedSvg,
      },
    ),
  );
};

OrderedListOutlined.displayName = 'OrderedListOutlined';

var PaperClipOutlined = function PaperClipOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PaperClipOutlinedSvg,
      },
    ),
  );
};

PaperClipOutlined.displayName = 'PaperClipOutlined';

var PartitionOutlined = function PartitionOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PartitionOutlinedSvg,
      },
    ),
  );
};

PartitionOutlined.displayName = 'PartitionOutlined';

var PauseCircleFilled = function PauseCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PauseCircleFilledSvg,
      },
    ),
  );
};

PauseCircleFilled.displayName = 'PauseCircleFilled';

var PauseCircleOutlined = function PauseCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PauseCircleOutlinedSvg,
      },
    ),
  );
};

PauseCircleOutlined.displayName = 'PauseCircleOutlined';

var PauseCircleTwoTone = function PauseCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PauseCircleTwoToneSvg,
      },
    ),
  );
};

PauseCircleTwoTone.displayName = 'PauseCircleTwoTone';

var PauseOutlined = function PauseOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PauseOutlinedSvg,
      },
    ),
  );
};

PauseOutlined.displayName = 'PauseOutlined';

var PayCircleFilled = function PayCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PayCircleFilledSvg,
      },
    ),
  );
};

PayCircleFilled.displayName = 'PayCircleFilled';

var PayCircleOutlined = function PayCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PayCircleOutlinedSvg,
      },
    ),
  );
};

PayCircleOutlined.displayName = 'PayCircleOutlined';

var PercentageOutlined = function PercentageOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PercentageOutlinedSvg,
      },
    ),
  );
};

PercentageOutlined.displayName = 'PercentageOutlined';

var PhoneFilled = function PhoneFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PhoneFilledSvg,
      },
    ),
  );
};

PhoneFilled.displayName = 'PhoneFilled';

var PhoneOutlined = function PhoneOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PhoneOutlinedSvg,
      },
    ),
  );
};

PhoneOutlined.displayName = 'PhoneOutlined';

var PhoneTwoTone = function PhoneTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PhoneTwoToneSvg,
      },
    ),
  );
};

PhoneTwoTone.displayName = 'PhoneTwoTone';

var PicCenterOutlined = function PicCenterOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PicCenterOutlinedSvg,
      },
    ),
  );
};

PicCenterOutlined.displayName = 'PicCenterOutlined';

var PicLeftOutlined = function PicLeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PicLeftOutlinedSvg,
      },
    ),
  );
};

PicLeftOutlined.displayName = 'PicLeftOutlined';

var PicRightOutlined = function PicRightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PicRightOutlinedSvg,
      },
    ),
  );
};

PicRightOutlined.displayName = 'PicRightOutlined';

var PictureFilled = function PictureFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PictureFilledSvg,
      },
    ),
  );
};

PictureFilled.displayName = 'PictureFilled';

var PictureOutlined = function PictureOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PictureOutlinedSvg,
      },
    ),
  );
};

PictureOutlined.displayName = 'PictureOutlined';

var PictureTwoTone = function PictureTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PictureTwoToneSvg,
      },
    ),
  );
};

PictureTwoTone.displayName = 'PictureTwoTone';

var PieChartFilled = function PieChartFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PieChartFilledSvg,
      },
    ),
  );
};

PieChartFilled.displayName = 'PieChartFilled';

var PieChartOutlined = function PieChartOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PieChartOutlinedSvg,
      },
    ),
  );
};

PieChartOutlined.displayName = 'PieChartOutlined';

var PieChartTwoTone = function PieChartTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PieChartTwoToneSvg,
      },
    ),
  );
};

PieChartTwoTone.displayName = 'PieChartTwoTone';

var PlayCircleFilled = function PlayCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlayCircleFilledSvg,
      },
    ),
  );
};

PlayCircleFilled.displayName = 'PlayCircleFilled';

var PlayCircleOutlined = function PlayCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlayCircleOutlinedSvg,
      },
    ),
  );
};

PlayCircleOutlined.displayName = 'PlayCircleOutlined';

var PlayCircleTwoTone = function PlayCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlayCircleTwoToneSvg,
      },
    ),
  );
};

PlayCircleTwoTone.displayName = 'PlayCircleTwoTone';

var PlaySquareFilled = function PlaySquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlaySquareFilledSvg,
      },
    ),
  );
};

PlaySquareFilled.displayName = 'PlaySquareFilled';

var PlaySquareOutlined = function PlaySquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlaySquareOutlinedSvg,
      },
    ),
  );
};

PlaySquareOutlined.displayName = 'PlaySquareOutlined';

var PlaySquareTwoTone = function PlaySquareTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlaySquareTwoToneSvg,
      },
    ),
  );
};

PlaySquareTwoTone.displayName = 'PlaySquareTwoTone';

var PlusCircleFilled = function PlusCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlusCircleFilledSvg,
      },
    ),
  );
};

PlusCircleFilled.displayName = 'PlusCircleFilled';

var PlusCircleOutlined = function PlusCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlusCircleOutlinedSvg,
      },
    ),
  );
};

PlusCircleOutlined.displayName = 'PlusCircleOutlined';

var PlusCircleTwoTone = function PlusCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlusCircleTwoToneSvg,
      },
    ),
  );
};

PlusCircleTwoTone.displayName = 'PlusCircleTwoTone';

var PlusOutlined = function PlusOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlusOutlinedSvg,
      },
    ),
  );
};

PlusOutlined.displayName = 'PlusOutlined';

var PlusSquareFilled = function PlusSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlusSquareFilledSvg,
      },
    ),
  );
};

PlusSquareFilled.displayName = 'PlusSquareFilled';

var PlusSquareOutlined = function PlusSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlusSquareOutlinedSvg,
      },
    ),
  );
};

PlusSquareOutlined.displayName = 'PlusSquareOutlined';

var PlusSquareTwoTone = function PlusSquareTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PlusSquareTwoToneSvg,
      },
    ),
  );
};

PlusSquareTwoTone.displayName = 'PlusSquareTwoTone';

var PoundCircleFilled = function PoundCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PoundCircleFilledSvg,
      },
    ),
  );
};

PoundCircleFilled.displayName = 'PoundCircleFilled';

var PoundCircleOutlined = function PoundCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PoundCircleOutlinedSvg,
      },
    ),
  );
};

PoundCircleOutlined.displayName = 'PoundCircleOutlined';

var PoundCircleTwoTone = function PoundCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PoundCircleTwoToneSvg,
      },
    ),
  );
};

PoundCircleTwoTone.displayName = 'PoundCircleTwoTone';

var PoundOutlined = function PoundOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PoundOutlinedSvg,
      },
    ),
  );
};

PoundOutlined.displayName = 'PoundOutlined';

var PoweroffOutlined = function PoweroffOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PoweroffOutlinedSvg,
      },
    ),
  );
};

PoweroffOutlined.displayName = 'PoweroffOutlined';

var PrinterFilled = function PrinterFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PrinterFilledSvg,
      },
    ),
  );
};

PrinterFilled.displayName = 'PrinterFilled';

var PrinterOutlined = function PrinterOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PrinterOutlinedSvg,
      },
    ),
  );
};

PrinterOutlined.displayName = 'PrinterOutlined';

var PrinterTwoTone = function PrinterTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PrinterTwoToneSvg,
      },
    ),
  );
};

PrinterTwoTone.displayName = 'PrinterTwoTone';

var ProfileFilled = function ProfileFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ProfileFilledSvg,
      },
    ),
  );
};

ProfileFilled.displayName = 'ProfileFilled';

var ProfileOutlined = function ProfileOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ProfileOutlinedSvg,
      },
    ),
  );
};

ProfileOutlined.displayName = 'ProfileOutlined';

var ProfileTwoTone = function ProfileTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ProfileTwoToneSvg,
      },
    ),
  );
};

ProfileTwoTone.displayName = 'ProfileTwoTone';

var ProjectFilled = function ProjectFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ProjectFilledSvg,
      },
    ),
  );
};

ProjectFilled.displayName = 'ProjectFilled';

var ProjectOutlined = function ProjectOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ProjectOutlinedSvg,
      },
    ),
  );
};

ProjectOutlined.displayName = 'ProjectOutlined';

var ProjectTwoTone = function ProjectTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ProjectTwoToneSvg,
      },
    ),
  );
};

ProjectTwoTone.displayName = 'ProjectTwoTone';

var PropertySafetyFilled = function PropertySafetyFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PropertySafetyFilledSvg,
      },
    ),
  );
};

PropertySafetyFilled.displayName = 'PropertySafetyFilled';

var PropertySafetyOutlined = function PropertySafetyOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PropertySafetyOutlinedSvg,
      },
    ),
  );
};

PropertySafetyOutlined.displayName = 'PropertySafetyOutlined';

var PropertySafetyTwoTone = function PropertySafetyTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PropertySafetyTwoToneSvg,
      },
    ),
  );
};

PropertySafetyTwoTone.displayName = 'PropertySafetyTwoTone';

var PullRequestOutlined = function PullRequestOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PullRequestOutlinedSvg,
      },
    ),
  );
};

PullRequestOutlined.displayName = 'PullRequestOutlined';

var PushpinFilled = function PushpinFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PushpinFilledSvg,
      },
    ),
  );
};

PushpinFilled.displayName = 'PushpinFilled';

var PushpinOutlined = function PushpinOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PushpinOutlinedSvg,
      },
    ),
  );
};

PushpinOutlined.displayName = 'PushpinOutlined';

var PushpinTwoTone = function PushpinTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: PushpinTwoToneSvg,
      },
    ),
  );
};

PushpinTwoTone.displayName = 'PushpinTwoTone';

var QqCircleFilled = function QqCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: QqCircleFilledSvg,
      },
    ),
  );
};

QqCircleFilled.displayName = 'QqCircleFilled';

var QqOutlined = function QqOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: QqOutlinedSvg,
      },
    ),
  );
};

QqOutlined.displayName = 'QqOutlined';

var QqSquareFilled = function QqSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: QqSquareFilledSvg,
      },
    ),
  );
};

QqSquareFilled.displayName = 'QqSquareFilled';

var QrcodeOutlined = function QrcodeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: QrcodeOutlinedSvg,
      },
    ),
  );
};

QrcodeOutlined.displayName = 'QrcodeOutlined';

var QuestionCircleFilled = function QuestionCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: QuestionCircleFilledSvg,
      },
    ),
  );
};

QuestionCircleFilled.displayName = 'QuestionCircleFilled';

var QuestionCircleOutlined = function QuestionCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: QuestionCircleOutlinedSvg,
      },
    ),
  );
};

QuestionCircleOutlined.displayName = 'QuestionCircleOutlined';

var QuestionCircleTwoTone = function QuestionCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: QuestionCircleTwoToneSvg,
      },
    ),
  );
};

QuestionCircleTwoTone.displayName = 'QuestionCircleTwoTone';

var QuestionOutlined = function QuestionOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: QuestionOutlinedSvg,
      },
    ),
  );
};

QuestionOutlined.displayName = 'QuestionOutlined';

var RadarChartOutlined = function RadarChartOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RadarChartOutlinedSvg,
      },
    ),
  );
};

RadarChartOutlined.displayName = 'RadarChartOutlined';

var RadiusBottomleftOutlined = function RadiusBottomleftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RadiusBottomleftOutlinedSvg,
      },
    ),
  );
};

RadiusBottomleftOutlined.displayName = 'RadiusBottomleftOutlined';

var RadiusBottomrightOutlined = function RadiusBottomrightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RadiusBottomrightOutlinedSvg,
      },
    ),
  );
};

RadiusBottomrightOutlined.displayName = 'RadiusBottomrightOutlined';

var RadiusSettingOutlined = function RadiusSettingOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RadiusSettingOutlinedSvg,
      },
    ),
  );
};

RadiusSettingOutlined.displayName = 'RadiusSettingOutlined';

var RadiusUpleftOutlined = function RadiusUpleftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RadiusUpleftOutlinedSvg,
      },
    ),
  );
};

RadiusUpleftOutlined.displayName = 'RadiusUpleftOutlined';

var RadiusUprightOutlined = function RadiusUprightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RadiusUprightOutlinedSvg,
      },
    ),
  );
};

RadiusUprightOutlined.displayName = 'RadiusUprightOutlined';

var ReadFilled = function ReadFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ReadFilledSvg,
      },
    ),
  );
};

ReadFilled.displayName = 'ReadFilled';

var ReadOutlined = function ReadOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ReadOutlinedSvg,
      },
    ),
  );
};

ReadOutlined.displayName = 'ReadOutlined';

var ReconciliationFilled = function ReconciliationFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ReconciliationFilledSvg,
      },
    ),
  );
};

ReconciliationFilled.displayName = 'ReconciliationFilled';

var ReconciliationOutlined = function ReconciliationOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ReconciliationOutlinedSvg,
      },
    ),
  );
};

ReconciliationOutlined.displayName = 'ReconciliationOutlined';

var ReconciliationTwoTone = function ReconciliationTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ReconciliationTwoToneSvg,
      },
    ),
  );
};

ReconciliationTwoTone.displayName = 'ReconciliationTwoTone';

var RedEnvelopeFilled = function RedEnvelopeFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RedEnvelopeFilledSvg,
      },
    ),
  );
};

RedEnvelopeFilled.displayName = 'RedEnvelopeFilled';

var RedEnvelopeOutlined = function RedEnvelopeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RedEnvelopeOutlinedSvg,
      },
    ),
  );
};

RedEnvelopeOutlined.displayName = 'RedEnvelopeOutlined';

var RedEnvelopeTwoTone = function RedEnvelopeTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RedEnvelopeTwoToneSvg,
      },
    ),
  );
};

RedEnvelopeTwoTone.displayName = 'RedEnvelopeTwoTone';

var RedditCircleFilled = function RedditCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RedditCircleFilledSvg,
      },
    ),
  );
};

RedditCircleFilled.displayName = 'RedditCircleFilled';

var RedditOutlined = function RedditOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RedditOutlinedSvg,
      },
    ),
  );
};

RedditOutlined.displayName = 'RedditOutlined';

var RedditSquareFilled = function RedditSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RedditSquareFilledSvg,
      },
    ),
  );
};

RedditSquareFilled.displayName = 'RedditSquareFilled';

var RedoOutlined = function RedoOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RedoOutlinedSvg,
      },
    ),
  );
};

RedoOutlined.displayName = 'RedoOutlined';

var ReloadOutlined = function ReloadOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ReloadOutlinedSvg,
      },
    ),
  );
};

ReloadOutlined.displayName = 'ReloadOutlined';

var RestFilled = function RestFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RestFilledSvg,
      },
    ),
  );
};

RestFilled.displayName = 'RestFilled';

var RestOutlined = function RestOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RestOutlinedSvg,
      },
    ),
  );
};

RestOutlined.displayName = 'RestOutlined';

var RestTwoTone = function RestTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RestTwoToneSvg,
      },
    ),
  );
};

RestTwoTone.displayName = 'RestTwoTone';

var RetweetOutlined = function RetweetOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RetweetOutlinedSvg,
      },
    ),
  );
};

RetweetOutlined.displayName = 'RetweetOutlined';

var RightCircleFilled = function RightCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RightCircleFilledSvg,
      },
    ),
  );
};

RightCircleFilled.displayName = 'RightCircleFilled';

var RightCircleOutlined = function RightCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RightCircleOutlinedSvg,
      },
    ),
  );
};

RightCircleOutlined.displayName = 'RightCircleOutlined';

var RightCircleTwoTone = function RightCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RightCircleTwoToneSvg,
      },
    ),
  );
};

RightCircleTwoTone.displayName = 'RightCircleTwoTone';

var RightOutlined = function RightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RightOutlinedSvg,
      },
    ),
  );
};

RightOutlined.displayName = 'RightOutlined';

var RightSquareFilled = function RightSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RightSquareFilledSvg,
      },
    ),
  );
};

RightSquareFilled.displayName = 'RightSquareFilled';

var RightSquareOutlined = function RightSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RightSquareOutlinedSvg,
      },
    ),
  );
};

RightSquareOutlined.displayName = 'RightSquareOutlined';

var RightSquareTwoTone = function RightSquareTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RightSquareTwoToneSvg,
      },
    ),
  );
};

RightSquareTwoTone.displayName = 'RightSquareTwoTone';

var RiseOutlined = function RiseOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RiseOutlinedSvg,
      },
    ),
  );
};

RiseOutlined.displayName = 'RiseOutlined';

var RobotFilled = function RobotFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RobotFilledSvg,
      },
    ),
  );
};

RobotFilled.displayName = 'RobotFilled';

var RobotOutlined = function RobotOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RobotOutlinedSvg,
      },
    ),
  );
};

RobotOutlined.displayName = 'RobotOutlined';

var RocketFilled = function RocketFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RocketFilledSvg,
      },
    ),
  );
};

RocketFilled.displayName = 'RocketFilled';

var RocketOutlined = function RocketOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RocketOutlinedSvg,
      },
    ),
  );
};

RocketOutlined.displayName = 'RocketOutlined';

var RocketTwoTone = function RocketTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RocketTwoToneSvg,
      },
    ),
  );
};

RocketTwoTone.displayName = 'RocketTwoTone';

var RollbackOutlined = function RollbackOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RollbackOutlinedSvg,
      },
    ),
  );
};

RollbackOutlined.displayName = 'RollbackOutlined';

var RotateLeftOutlined = function RotateLeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RotateLeftOutlinedSvg,
      },
    ),
  );
};

RotateLeftOutlined.displayName = 'RotateLeftOutlined';

var RotateRightOutlined = function RotateRightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: RotateRightOutlinedSvg,
      },
    ),
  );
};

RotateRightOutlined.displayName = 'RotateRightOutlined';

var SafetyCertificateFilled = function SafetyCertificateFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SafetyCertificateFilledSvg,
      },
    ),
  );
};

SafetyCertificateFilled.displayName = 'SafetyCertificateFilled';

var SafetyCertificateOutlined = function SafetyCertificateOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SafetyCertificateOutlinedSvg,
      },
    ),
  );
};

SafetyCertificateOutlined.displayName = 'SafetyCertificateOutlined';

var SafetyCertificateTwoTone = function SafetyCertificateTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SafetyCertificateTwoToneSvg,
      },
    ),
  );
};

SafetyCertificateTwoTone.displayName = 'SafetyCertificateTwoTone';

var SafetyOutlined = function SafetyOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SafetyOutlinedSvg,
      },
    ),
  );
};

SafetyOutlined.displayName = 'SafetyOutlined';

var SaveFilled = function SaveFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SaveFilledSvg,
      },
    ),
  );
};

SaveFilled.displayName = 'SaveFilled';

var SaveOutlined = function SaveOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SaveOutlinedSvg,
      },
    ),
  );
};

SaveOutlined.displayName = 'SaveOutlined';

var SaveTwoTone = function SaveTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SaveTwoToneSvg,
      },
    ),
  );
};

SaveTwoTone.displayName = 'SaveTwoTone';

var ScanOutlined = function ScanOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ScanOutlinedSvg,
      },
    ),
  );
};

ScanOutlined.displayName = 'ScanOutlined';

var ScheduleFilled = function ScheduleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ScheduleFilledSvg,
      },
    ),
  );
};

ScheduleFilled.displayName = 'ScheduleFilled';

var ScheduleOutlined = function ScheduleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ScheduleOutlinedSvg,
      },
    ),
  );
};

ScheduleOutlined.displayName = 'ScheduleOutlined';

var ScheduleTwoTone = function ScheduleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ScheduleTwoToneSvg,
      },
    ),
  );
};

ScheduleTwoTone.displayName = 'ScheduleTwoTone';

var ScissorOutlined = function ScissorOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ScissorOutlinedSvg,
      },
    ),
  );
};

ScissorOutlined.displayName = 'ScissorOutlined';

var SearchOutlined = function SearchOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SearchOutlinedSvg,
      },
    ),
  );
};

SearchOutlined.displayName = 'SearchOutlined';

var SecurityScanFilled = function SecurityScanFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SecurityScanFilledSvg,
      },
    ),
  );
};

SecurityScanFilled.displayName = 'SecurityScanFilled';

var SecurityScanOutlined = function SecurityScanOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SecurityScanOutlinedSvg,
      },
    ),
  );
};

SecurityScanOutlined.displayName = 'SecurityScanOutlined';

var SecurityScanTwoTone = function SecurityScanTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SecurityScanTwoToneSvg,
      },
    ),
  );
};

SecurityScanTwoTone.displayName = 'SecurityScanTwoTone';

var SelectOutlined = function SelectOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SelectOutlinedSvg,
      },
    ),
  );
};

SelectOutlined.displayName = 'SelectOutlined';

var SendOutlined = function SendOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SendOutlinedSvg,
      },
    ),
  );
};

SendOutlined.displayName = 'SendOutlined';

var SettingFilled = function SettingFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SettingFilledSvg,
      },
    ),
  );
};

SettingFilled.displayName = 'SettingFilled';

var SettingOutlined = function SettingOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SettingOutlinedSvg,
      },
    ),
  );
};

SettingOutlined.displayName = 'SettingOutlined';

var SettingTwoTone = function SettingTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SettingTwoToneSvg,
      },
    ),
  );
};

SettingTwoTone.displayName = 'SettingTwoTone';

var ShakeOutlined = function ShakeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ShakeOutlinedSvg,
      },
    ),
  );
};

ShakeOutlined.displayName = 'ShakeOutlined';

var ShareAltOutlined = function ShareAltOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ShareAltOutlinedSvg,
      },
    ),
  );
};

ShareAltOutlined.displayName = 'ShareAltOutlined';

var ShopFilled = function ShopFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ShopFilledSvg,
      },
    ),
  );
};

ShopFilled.displayName = 'ShopFilled';

var ShopOutlined = function ShopOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ShopOutlinedSvg,
      },
    ),
  );
};

ShopOutlined.displayName = 'ShopOutlined';

var ShopTwoTone = function ShopTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ShopTwoToneSvg,
      },
    ),
  );
};

ShopTwoTone.displayName = 'ShopTwoTone';

var ShoppingCartOutlined = function ShoppingCartOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ShoppingCartOutlinedSvg,
      },
    ),
  );
};

ShoppingCartOutlined.displayName = 'ShoppingCartOutlined';

var ShoppingFilled = function ShoppingFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ShoppingFilledSvg,
      },
    ),
  );
};

ShoppingFilled.displayName = 'ShoppingFilled';

var ShoppingOutlined = function ShoppingOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ShoppingOutlinedSvg,
      },
    ),
  );
};

ShoppingOutlined.displayName = 'ShoppingOutlined';

var ShoppingTwoTone = function ShoppingTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ShoppingTwoToneSvg,
      },
    ),
  );
};

ShoppingTwoTone.displayName = 'ShoppingTwoTone';

var ShrinkOutlined = function ShrinkOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ShrinkOutlinedSvg,
      },
    ),
  );
};

ShrinkOutlined.displayName = 'ShrinkOutlined';

var SignalFilled = function SignalFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SignalFilledSvg,
      },
    ),
  );
};

SignalFilled.displayName = 'SignalFilled';

var SisternodeOutlined = function SisternodeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SisternodeOutlinedSvg,
      },
    ),
  );
};

SisternodeOutlined.displayName = 'SisternodeOutlined';

var SketchCircleFilled = function SketchCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SketchCircleFilledSvg,
      },
    ),
  );
};

SketchCircleFilled.displayName = 'SketchCircleFilled';

var SketchOutlined = function SketchOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SketchOutlinedSvg,
      },
    ),
  );
};

SketchOutlined.displayName = 'SketchOutlined';

var SketchSquareFilled = function SketchSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SketchSquareFilledSvg,
      },
    ),
  );
};

SketchSquareFilled.displayName = 'SketchSquareFilled';

var SkinFilled = function SkinFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SkinFilledSvg,
      },
    ),
  );
};

SkinFilled.displayName = 'SkinFilled';

var SkinOutlined = function SkinOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SkinOutlinedSvg,
      },
    ),
  );
};

SkinOutlined.displayName = 'SkinOutlined';

var SkinTwoTone = function SkinTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SkinTwoToneSvg,
      },
    ),
  );
};

SkinTwoTone.displayName = 'SkinTwoTone';

var SkypeFilled = function SkypeFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SkypeFilledSvg,
      },
    ),
  );
};

SkypeFilled.displayName = 'SkypeFilled';

var SkypeOutlined = function SkypeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SkypeOutlinedSvg,
      },
    ),
  );
};

SkypeOutlined.displayName = 'SkypeOutlined';

var SlackCircleFilled = function SlackCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SlackCircleFilledSvg,
      },
    ),
  );
};

SlackCircleFilled.displayName = 'SlackCircleFilled';

var SlackOutlined = function SlackOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SlackOutlinedSvg,
      },
    ),
  );
};

SlackOutlined.displayName = 'SlackOutlined';

var SlackSquareFilled = function SlackSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SlackSquareFilledSvg,
      },
    ),
  );
};

SlackSquareFilled.displayName = 'SlackSquareFilled';

var SlackSquareOutlined = function SlackSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SlackSquareOutlinedSvg,
      },
    ),
  );
};

SlackSquareOutlined.displayName = 'SlackSquareOutlined';

var SlidersFilled = function SlidersFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SlidersFilledSvg,
      },
    ),
  );
};

SlidersFilled.displayName = 'SlidersFilled';

var SlidersOutlined = function SlidersOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SlidersOutlinedSvg,
      },
    ),
  );
};

SlidersOutlined.displayName = 'SlidersOutlined';

var SlidersTwoTone = function SlidersTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SlidersTwoToneSvg,
      },
    ),
  );
};

SlidersTwoTone.displayName = 'SlidersTwoTone';

var SmallDashOutlined = function SmallDashOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SmallDashOutlinedSvg,
      },
    ),
  );
};

SmallDashOutlined.displayName = 'SmallDashOutlined';

var SmileFilled = function SmileFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SmileFilledSvg,
      },
    ),
  );
};

SmileFilled.displayName = 'SmileFilled';

var SmileOutlined = function SmileOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SmileOutlinedSvg,
      },
    ),
  );
};

SmileOutlined.displayName = 'SmileOutlined';

var SmileTwoTone = function SmileTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SmileTwoToneSvg,
      },
    ),
  );
};

SmileTwoTone.displayName = 'SmileTwoTone';

var SnippetsFilled = function SnippetsFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SnippetsFilledSvg,
      },
    ),
  );
};

SnippetsFilled.displayName = 'SnippetsFilled';

var SnippetsOutlined = function SnippetsOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SnippetsOutlinedSvg,
      },
    ),
  );
};

SnippetsOutlined.displayName = 'SnippetsOutlined';

var SnippetsTwoTone = function SnippetsTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SnippetsTwoToneSvg,
      },
    ),
  );
};

SnippetsTwoTone.displayName = 'SnippetsTwoTone';

var SolutionOutlined = function SolutionOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SolutionOutlinedSvg,
      },
    ),
  );
};

SolutionOutlined.displayName = 'SolutionOutlined';

var SortAscendingOutlined = function SortAscendingOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SortAscendingOutlinedSvg,
      },
    ),
  );
};

SortAscendingOutlined.displayName = 'SortAscendingOutlined';

var SortDescendingOutlined = function SortDescendingOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SortDescendingOutlinedSvg,
      },
    ),
  );
};

SortDescendingOutlined.displayName = 'SortDescendingOutlined';

var SoundFilled = function SoundFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SoundFilledSvg,
      },
    ),
  );
};

SoundFilled.displayName = 'SoundFilled';

var SoundOutlined = function SoundOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SoundOutlinedSvg,
      },
    ),
  );
};

SoundOutlined.displayName = 'SoundOutlined';

var SoundTwoTone = function SoundTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SoundTwoToneSvg,
      },
    ),
  );
};

SoundTwoTone.displayName = 'SoundTwoTone';

var SplitCellsOutlined = function SplitCellsOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SplitCellsOutlinedSvg,
      },
    ),
  );
};

SplitCellsOutlined.displayName = 'SplitCellsOutlined';

var StarFilled = function StarFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StarFilledSvg,
      },
    ),
  );
};

StarFilled.displayName = 'StarFilled';

var StarOutlined = function StarOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StarOutlinedSvg,
      },
    ),
  );
};

StarOutlined.displayName = 'StarOutlined';

var StarTwoTone = function StarTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StarTwoToneSvg,
      },
    ),
  );
};

StarTwoTone.displayName = 'StarTwoTone';

var StepBackwardFilled = function StepBackwardFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StepBackwardFilledSvg,
      },
    ),
  );
};

StepBackwardFilled.displayName = 'StepBackwardFilled';

var StepBackwardOutlined = function StepBackwardOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StepBackwardOutlinedSvg,
      },
    ),
  );
};

StepBackwardOutlined.displayName = 'StepBackwardOutlined';

var StepForwardFilled = function StepForwardFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StepForwardFilledSvg,
      },
    ),
  );
};

StepForwardFilled.displayName = 'StepForwardFilled';

var StepForwardOutlined = function StepForwardOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StepForwardOutlinedSvg,
      },
    ),
  );
};

StepForwardOutlined.displayName = 'StepForwardOutlined';

var StockOutlined = function StockOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StockOutlinedSvg,
      },
    ),
  );
};

StockOutlined.displayName = 'StockOutlined';

var StopFilled = function StopFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StopFilledSvg,
      },
    ),
  );
};

StopFilled.displayName = 'StopFilled';

var StopOutlined = function StopOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StopOutlinedSvg,
      },
    ),
  );
};

StopOutlined.displayName = 'StopOutlined';

var StopTwoTone = function StopTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StopTwoToneSvg,
      },
    ),
  );
};

StopTwoTone.displayName = 'StopTwoTone';

var StrikethroughOutlined = function StrikethroughOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: StrikethroughOutlinedSvg,
      },
    ),
  );
};

StrikethroughOutlined.displayName = 'StrikethroughOutlined';

var SubnodeOutlined = function SubnodeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SubnodeOutlinedSvg,
      },
    ),
  );
};

SubnodeOutlined.displayName = 'SubnodeOutlined';

var SwapLeftOutlined = function SwapLeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SwapLeftOutlinedSvg,
      },
    ),
  );
};

SwapLeftOutlined.displayName = 'SwapLeftOutlined';

var SwapOutlined = function SwapOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SwapOutlinedSvg,
      },
    ),
  );
};

SwapOutlined.displayName = 'SwapOutlined';

var SwapRightOutlined = function SwapRightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SwapRightOutlinedSvg,
      },
    ),
  );
};

SwapRightOutlined.displayName = 'SwapRightOutlined';

var SwitcherFilled = function SwitcherFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SwitcherFilledSvg,
      },
    ),
  );
};

SwitcherFilled.displayName = 'SwitcherFilled';

var SwitcherOutlined = function SwitcherOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SwitcherOutlinedSvg,
      },
    ),
  );
};

SwitcherOutlined.displayName = 'SwitcherOutlined';

var SwitcherTwoTone = function SwitcherTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SwitcherTwoToneSvg,
      },
    ),
  );
};

SwitcherTwoTone.displayName = 'SwitcherTwoTone';

var SyncOutlined = function SyncOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: SyncOutlinedSvg,
      },
    ),
  );
};

SyncOutlined.displayName = 'SyncOutlined';

var TableOutlined = function TableOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TableOutlinedSvg,
      },
    ),
  );
};

TableOutlined.displayName = 'TableOutlined';

var TabletFilled = function TabletFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TabletFilledSvg,
      },
    ),
  );
};

TabletFilled.displayName = 'TabletFilled';

var TabletOutlined = function TabletOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TabletOutlinedSvg,
      },
    ),
  );
};

TabletOutlined.displayName = 'TabletOutlined';

var TabletTwoTone = function TabletTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TabletTwoToneSvg,
      },
    ),
  );
};

TabletTwoTone.displayName = 'TabletTwoTone';

var TagFilled = function TagFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TagFilledSvg,
      },
    ),
  );
};

TagFilled.displayName = 'TagFilled';

var TagOutlined = function TagOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TagOutlinedSvg,
      },
    ),
  );
};

TagOutlined.displayName = 'TagOutlined';

var TagTwoTone = function TagTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TagTwoToneSvg,
      },
    ),
  );
};

TagTwoTone.displayName = 'TagTwoTone';

var TagsFilled = function TagsFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TagsFilledSvg,
      },
    ),
  );
};

TagsFilled.displayName = 'TagsFilled';

var TagsOutlined = function TagsOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TagsOutlinedSvg,
      },
    ),
  );
};

TagsOutlined.displayName = 'TagsOutlined';

var TagsTwoTone = function TagsTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TagsTwoToneSvg,
      },
    ),
  );
};

TagsTwoTone.displayName = 'TagsTwoTone';

var TaobaoCircleFilled = function TaobaoCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TaobaoCircleFilledSvg,
      },
    ),
  );
};

TaobaoCircleFilled.displayName = 'TaobaoCircleFilled';

var TaobaoCircleOutlined = function TaobaoCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TaobaoCircleOutlinedSvg,
      },
    ),
  );
};

TaobaoCircleOutlined.displayName = 'TaobaoCircleOutlined';

var TaobaoOutlined = function TaobaoOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TaobaoOutlinedSvg,
      },
    ),
  );
};

TaobaoOutlined.displayName = 'TaobaoOutlined';

var TaobaoSquareFilled = function TaobaoSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TaobaoSquareFilledSvg,
      },
    ),
  );
};

TaobaoSquareFilled.displayName = 'TaobaoSquareFilled';

var TeamOutlined = function TeamOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TeamOutlinedSvg,
      },
    ),
  );
};

TeamOutlined.displayName = 'TeamOutlined';

var ThunderboltFilled = function ThunderboltFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ThunderboltFilledSvg,
      },
    ),
  );
};

ThunderboltFilled.displayName = 'ThunderboltFilled';

var ThunderboltOutlined = function ThunderboltOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ThunderboltOutlinedSvg,
      },
    ),
  );
};

ThunderboltOutlined.displayName = 'ThunderboltOutlined';

var ThunderboltTwoTone = function ThunderboltTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ThunderboltTwoToneSvg,
      },
    ),
  );
};

ThunderboltTwoTone.displayName = 'ThunderboltTwoTone';

var ToTopOutlined = function ToTopOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ToTopOutlinedSvg,
      },
    ),
  );
};

ToTopOutlined.displayName = 'ToTopOutlined';

var ToolFilled = function ToolFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ToolFilledSvg,
      },
    ),
  );
};

ToolFilled.displayName = 'ToolFilled';

var ToolOutlined = function ToolOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ToolOutlinedSvg,
      },
    ),
  );
};

ToolOutlined.displayName = 'ToolOutlined';

var ToolTwoTone = function ToolTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ToolTwoToneSvg,
      },
    ),
  );
};

ToolTwoTone.displayName = 'ToolTwoTone';

var TrademarkCircleFilled = function TrademarkCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TrademarkCircleFilledSvg,
      },
    ),
  );
};

TrademarkCircleFilled.displayName = 'TrademarkCircleFilled';

var TrademarkCircleOutlined = function TrademarkCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TrademarkCircleOutlinedSvg,
      },
    ),
  );
};

TrademarkCircleOutlined.displayName = 'TrademarkCircleOutlined';

var TrademarkCircleTwoTone = function TrademarkCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TrademarkCircleTwoToneSvg,
      },
    ),
  );
};

TrademarkCircleTwoTone.displayName = 'TrademarkCircleTwoTone';

var TrademarkOutlined = function TrademarkOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TrademarkOutlinedSvg,
      },
    ),
  );
};

TrademarkOutlined.displayName = 'TrademarkOutlined';

var TransactionOutlined = function TransactionOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TransactionOutlinedSvg,
      },
    ),
  );
};

TransactionOutlined.displayName = 'TransactionOutlined';

var TranslationOutlined = function TranslationOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TranslationOutlinedSvg,
      },
    ),
  );
};

TranslationOutlined.displayName = 'TranslationOutlined';

var TrophyFilled = function TrophyFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TrophyFilledSvg,
      },
    ),
  );
};

TrophyFilled.displayName = 'TrophyFilled';

var TrophyOutlined = function TrophyOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TrophyOutlinedSvg,
      },
    ),
  );
};

TrophyOutlined.displayName = 'TrophyOutlined';

var TrophyTwoTone = function TrophyTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TrophyTwoToneSvg,
      },
    ),
  );
};

TrophyTwoTone.displayName = 'TrophyTwoTone';

var TwitterCircleFilled = function TwitterCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TwitterCircleFilledSvg,
      },
    ),
  );
};

TwitterCircleFilled.displayName = 'TwitterCircleFilled';

var TwitterOutlined = function TwitterOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TwitterOutlinedSvg,
      },
    ),
  );
};

TwitterOutlined.displayName = 'TwitterOutlined';

var TwitterSquareFilled = function TwitterSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: TwitterSquareFilledSvg,
      },
    ),
  );
};

TwitterSquareFilled.displayName = 'TwitterSquareFilled';

var UnderlineOutlined = function UnderlineOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UnderlineOutlinedSvg,
      },
    ),
  );
};

UnderlineOutlined.displayName = 'UnderlineOutlined';

var UndoOutlined = function UndoOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UndoOutlinedSvg,
      },
    ),
  );
};

UndoOutlined.displayName = 'UndoOutlined';

var UngroupOutlined = function UngroupOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UngroupOutlinedSvg,
      },
    ),
  );
};

UngroupOutlined.displayName = 'UngroupOutlined';

var UnlockFilled = function UnlockFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UnlockFilledSvg,
      },
    ),
  );
};

UnlockFilled.displayName = 'UnlockFilled';

var UnlockOutlined = function UnlockOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UnlockOutlinedSvg,
      },
    ),
  );
};

UnlockOutlined.displayName = 'UnlockOutlined';

var UnlockTwoTone = function UnlockTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UnlockTwoToneSvg,
      },
    ),
  );
};

UnlockTwoTone.displayName = 'UnlockTwoTone';

var UnorderedListOutlined = function UnorderedListOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UnorderedListOutlinedSvg,
      },
    ),
  );
};

UnorderedListOutlined.displayName = 'UnorderedListOutlined';

var UpCircleFilled = function UpCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UpCircleFilledSvg,
      },
    ),
  );
};

UpCircleFilled.displayName = 'UpCircleFilled';

var UpCircleOutlined = function UpCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UpCircleOutlinedSvg,
      },
    ),
  );
};

UpCircleOutlined.displayName = 'UpCircleOutlined';

var UpCircleTwoTone = function UpCircleTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UpCircleTwoToneSvg,
      },
    ),
  );
};

UpCircleTwoTone.displayName = 'UpCircleTwoTone';

var UpOutlined = function UpOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UpOutlinedSvg,
      },
    ),
  );
};

UpOutlined.displayName = 'UpOutlined';

var UpSquareFilled = function UpSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UpSquareFilledSvg,
      },
    ),
  );
};

UpSquareFilled.displayName = 'UpSquareFilled';

var UpSquareOutlined = function UpSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UpSquareOutlinedSvg,
      },
    ),
  );
};

UpSquareOutlined.displayName = 'UpSquareOutlined';

var UpSquareTwoTone = function UpSquareTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UpSquareTwoToneSvg,
      },
    ),
  );
};

UpSquareTwoTone.displayName = 'UpSquareTwoTone';

var UploadOutlined = function UploadOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UploadOutlinedSvg,
      },
    ),
  );
};

UploadOutlined.displayName = 'UploadOutlined';

var UsbFilled = function UsbFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UsbFilledSvg,
      },
    ),
  );
};

UsbFilled.displayName = 'UsbFilled';

var UsbOutlined = function UsbOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UsbOutlinedSvg,
      },
    ),
  );
};

UsbOutlined.displayName = 'UsbOutlined';

var UsbTwoTone = function UsbTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UsbTwoToneSvg,
      },
    ),
  );
};

UsbTwoTone.displayName = 'UsbTwoTone';

var UserAddOutlined = function UserAddOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UserAddOutlinedSvg,
      },
    ),
  );
};

UserAddOutlined.displayName = 'UserAddOutlined';

var UserDeleteOutlined = function UserDeleteOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UserDeleteOutlinedSvg,
      },
    ),
  );
};

UserDeleteOutlined.displayName = 'UserDeleteOutlined';

var UserOutlined = function UserOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UserOutlinedSvg,
      },
    ),
  );
};

UserOutlined.displayName = 'UserOutlined';

var UserSwitchOutlined = function UserSwitchOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UserSwitchOutlinedSvg,
      },
    ),
  );
};

UserSwitchOutlined.displayName = 'UserSwitchOutlined';

var UsergroupAddOutlined = function UsergroupAddOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UsergroupAddOutlinedSvg,
      },
    ),
  );
};

UsergroupAddOutlined.displayName = 'UsergroupAddOutlined';

var UsergroupDeleteOutlined = function UsergroupDeleteOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: UsergroupDeleteOutlinedSvg,
      },
    ),
  );
};

UsergroupDeleteOutlined.displayName = 'UsergroupDeleteOutlined';

var VerifiedOutlined = function VerifiedOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: VerifiedOutlinedSvg,
      },
    ),
  );
};

VerifiedOutlined.displayName = 'VerifiedOutlined';

var VerticalAlignBottomOutlined = function VerticalAlignBottomOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: VerticalAlignBottomOutlinedSvg,
      },
    ),
  );
};

VerticalAlignBottomOutlined.displayName = 'VerticalAlignBottomOutlined';

var VerticalAlignMiddleOutlined = function VerticalAlignMiddleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: VerticalAlignMiddleOutlinedSvg,
      },
    ),
  );
};

VerticalAlignMiddleOutlined.displayName = 'VerticalAlignMiddleOutlined';

var VerticalAlignTopOutlined = function VerticalAlignTopOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: VerticalAlignTopOutlinedSvg,
      },
    ),
  );
};

VerticalAlignTopOutlined.displayName = 'VerticalAlignTopOutlined';

var VerticalLeftOutlined = function VerticalLeftOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: VerticalLeftOutlinedSvg,
      },
    ),
  );
};

VerticalLeftOutlined.displayName = 'VerticalLeftOutlined';

var VerticalRightOutlined = function VerticalRightOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: VerticalRightOutlinedSvg,
      },
    ),
  );
};

VerticalRightOutlined.displayName = 'VerticalRightOutlined';

var VideoCameraAddOutlined = function VideoCameraAddOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: VideoCameraAddOutlinedSvg,
      },
    ),
  );
};

VideoCameraAddOutlined.displayName = 'VideoCameraAddOutlined';

var VideoCameraFilled = function VideoCameraFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: VideoCameraFilledSvg,
      },
    ),
  );
};

VideoCameraFilled.displayName = 'VideoCameraFilled';

var VideoCameraOutlined = function VideoCameraOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: VideoCameraOutlinedSvg,
      },
    ),
  );
};

VideoCameraOutlined.displayName = 'VideoCameraOutlined';

var VideoCameraTwoTone = function VideoCameraTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: VideoCameraTwoToneSvg,
      },
    ),
  );
};

VideoCameraTwoTone.displayName = 'VideoCameraTwoTone';

var WalletFilled = function WalletFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WalletFilledSvg,
      },
    ),
  );
};

WalletFilled.displayName = 'WalletFilled';

var WalletOutlined = function WalletOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WalletOutlinedSvg,
      },
    ),
  );
};

WalletOutlined.displayName = 'WalletOutlined';

var WalletTwoTone = function WalletTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WalletTwoToneSvg,
      },
    ),
  );
};

WalletTwoTone.displayName = 'WalletTwoTone';

var WarningFilled = function WarningFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WarningFilledSvg,
      },
    ),
  );
};

WarningFilled.displayName = 'WarningFilled';

var WarningOutlined = function WarningOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WarningOutlinedSvg,
      },
    ),
  );
};

WarningOutlined.displayName = 'WarningOutlined';

var WarningTwoTone = function WarningTwoTone(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WarningTwoToneSvg,
      },
    ),
  );
};

WarningTwoTone.displayName = 'WarningTwoTone';

var WechatFilled = function WechatFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WechatFilledSvg,
      },
    ),
  );
};

WechatFilled.displayName = 'WechatFilled';

var WechatOutlined = function WechatOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WechatOutlinedSvg,
      },
    ),
  );
};

WechatOutlined.displayName = 'WechatOutlined';

var WeiboCircleFilled = function WeiboCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WeiboCircleFilledSvg,
      },
    ),
  );
};

WeiboCircleFilled.displayName = 'WeiboCircleFilled';

var WeiboCircleOutlined = function WeiboCircleOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WeiboCircleOutlinedSvg,
      },
    ),
  );
};

WeiboCircleOutlined.displayName = 'WeiboCircleOutlined';

var WeiboOutlined = function WeiboOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WeiboOutlinedSvg,
      },
    ),
  );
};

WeiboOutlined.displayName = 'WeiboOutlined';

var WeiboSquareFilled = function WeiboSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WeiboSquareFilledSvg,
      },
    ),
  );
};

WeiboSquareFilled.displayName = 'WeiboSquareFilled';

var WeiboSquareOutlined = function WeiboSquareOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WeiboSquareOutlinedSvg,
      },
    ),
  );
};

WeiboSquareOutlined.displayName = 'WeiboSquareOutlined';

var WhatsAppOutlined = function WhatsAppOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WhatsAppOutlinedSvg,
      },
    ),
  );
};

WhatsAppOutlined.displayName = 'WhatsAppOutlined';

var WifiOutlined = function WifiOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WifiOutlinedSvg,
      },
    ),
  );
};

WifiOutlined.displayName = 'WifiOutlined';

var WindowsFilled = function WindowsFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WindowsFilledSvg,
      },
    ),
  );
};

WindowsFilled.displayName = 'WindowsFilled';

var WindowsOutlined = function WindowsOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WindowsOutlinedSvg,
      },
    ),
  );
};

WindowsOutlined.displayName = 'WindowsOutlined';

var WomanOutlined = function WomanOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: WomanOutlinedSvg,
      },
    ),
  );
};

WomanOutlined.displayName = 'WomanOutlined';

var YahooFilled = function YahooFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: YahooFilledSvg,
      },
    ),
  );
};

YahooFilled.displayName = 'YahooFilled';

var YahooOutlined = function YahooOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: YahooOutlinedSvg,
      },
    ),
  );
};

YahooOutlined.displayName = 'YahooOutlined';

var YoutubeFilled = function YoutubeFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: YoutubeFilledSvg,
      },
    ),
  );
};

YoutubeFilled.displayName = 'YoutubeFilled';

var YoutubeOutlined = function YoutubeOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: YoutubeOutlinedSvg,
      },
    ),
  );
};

YoutubeOutlined.displayName = 'YoutubeOutlined';

var YuqueFilled = function YuqueFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: YuqueFilledSvg,
      },
    ),
  );
};

YuqueFilled.displayName = 'YuqueFilled';

var YuqueOutlined = function YuqueOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: YuqueOutlinedSvg,
      },
    ),
  );
};

YuqueOutlined.displayName = 'YuqueOutlined';

var ZhihuCircleFilled = function ZhihuCircleFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ZhihuCircleFilledSvg,
      },
    ),
  );
};

ZhihuCircleFilled.displayName = 'ZhihuCircleFilled';

var ZhihuOutlined = function ZhihuOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ZhihuOutlinedSvg,
      },
    ),
  );
};

ZhihuOutlined.displayName = 'ZhihuOutlined';

var ZhihuSquareFilled = function ZhihuSquareFilled(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ZhihuSquareFilledSvg,
      },
    ),
  );
};

ZhihuSquareFilled.displayName = 'ZhihuSquareFilled';

var ZoomInOutlined = function ZoomInOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ZoomInOutlinedSvg,
      },
    ),
  );
};

ZoomInOutlined.displayName = 'ZoomInOutlined';

var ZoomOutOutlined = function ZoomOutOutlined(props, ref) {
  return /*#__PURE__*/ React.createElement(
    Icon$1,
    _objectSpread2(
      _objectSpread2({}, props),
      {},
      {
        ref: ref,
        icon: ZoomOutOutlinedSvg,
      },
    ),
  );
};

ZoomOutOutlined.displayName = 'ZoomOutOutlined';

var _excluded$1 = [
  'className',
  'component',
  'viewBox',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'children',
];
var Icon = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var className = props.className,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    children = props.children,
    restProps = _objectWithoutProperties(props, _excluded$1);

  warning(Boolean(Component || children), 'Should have `component` prop or `children`.');
  useInsertStyles();

  var _React$useContext = React.useContext(IconContext),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classNames(prefixCls, className);
  var svgClassString = classNames(_defineProperty({}, ''.concat(prefixCls, '-spin'), !!spin));
  var svgStyle = rotate
    ? {
        msTransform: 'rotate('.concat(rotate, 'deg)'),
        transform: 'rotate('.concat(rotate, 'deg)'),
      }
    : undefined;

  var innerSvgProps = _objectSpread2(
    _objectSpread2({}, svgBaseProps),
    {},
    {
      className: svgClassString,
      style: svgStyle,
      viewBox: viewBox,
    },
  );

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  } // component > children

  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/ React.createElement(
        Component,
        _objectSpread2({}, innerSvgProps),
        children,
      );
    }

    if (children) {
      warning(
        Boolean(viewBox) ||
          (React.Children.count(children) === 1 &&
            /*#__PURE__*/ React.isValidElement(children) &&
            React.Children.only(children).type === 'use'),
        'Make sure that you provide correct `viewBox`' +
          ' prop (default `0 0 1024 1024`) to the icon.',
      );
      return /*#__PURE__*/ React.createElement(
        'svg',
        _objectSpread2(
          _objectSpread2({}, innerSvgProps),
          {},
          {
            viewBox: viewBox,
          },
        ),
        children,
      );
    }

    return null;
  };

  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return /*#__PURE__*/ React.createElement(
    'span',
    _objectSpread2(
      _objectSpread2(
        {
          role: 'img',
        },
        restProps,
      ),
      {},
      {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString,
      },
    ),
    renderInnerNode(),
  );
});
Icon.displayName = 'AntdIcon';

IconContext.Provider;

function arrayMoveMutable(array, fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

    const [item] = array.splice(fromIndex, 1);
    array.splice(endIndex, 0, item);
  }
}

function arrayMoveImmutable(array, fromIndex, toIndex) {
  array = [...array];
  arrayMoveMutable(array, fromIndex, toIndex);
  return array;
}

function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };
  return _extends.apply(this, arguments);
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys.push.apply(
        ownKeys,
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }),
      );
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', {
    writable: false,
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  Object.defineProperty(subClass, 'prototype', {
    writable: false,
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.',
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function () {
          return args[argIndex++];
        }),
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

var propTypes$2 = { exports: {} };

var reactIs = { exports: {} };

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = 'function' === typeof Symbol && Symbol.for,
    c = b ? Symbol.for('react.element') : 60103,
    d = b ? Symbol.for('react.portal') : 60106,
    e = b ? Symbol.for('react.fragment') : 60107,
    f = b ? Symbol.for('react.strict_mode') : 60108,
    g = b ? Symbol.for('react.profiler') : 60114,
    h = b ? Symbol.for('react.provider') : 60109,
    k = b ? Symbol.for('react.context') : 60110,
    l = b ? Symbol.for('react.async_mode') : 60111,
    m = b ? Symbol.for('react.concurrent_mode') : 60111,
    n = b ? Symbol.for('react.forward_ref') : 60112,
    p = b ? Symbol.for('react.suspense') : 60113,
    q = b ? Symbol.for('react.suspense_list') : 60120,
    r = b ? Symbol.for('react.memo') : 60115,
    t = b ? Symbol.for('react.lazy') : 60116,
    v = b ? Symbol.for('react.block') : 60121,
    w = b ? Symbol.for('react.fundamental') : 60117,
    x = b ? Symbol.for('react.responder') : 60118,
    y = b ? Symbol.for('react.scope') : 60119;
  function z(a) {
    if ('object' === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (((a = a.type), a)) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (((a = a && a.$$typeof), a)) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function (a) {
    return 'object' === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function (a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function (a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function (a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return (
      'string' === typeof a ||
      'function' === typeof a ||
      a === e ||
      a === m ||
      a === g ||
      a === f ||
      a === p ||
      a === q ||
      ('object' === typeof a &&
        null !== a &&
        (a.$$typeof === t ||
          a.$$typeof === r ||
          a.$$typeof === h ||
          a.$$typeof === k ||
          a.$$typeof === n ||
          a.$$typeof === w ||
          a.$$typeof === x ||
          a.$$typeof === y ||
          a.$$typeof === v))
    );
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;

  if (process.env.NODE_ENV !== 'production') {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return (
          typeof type === 'string' ||
          typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === 'object' &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }

      function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }
              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn'](
              'The ReactIs.isAsyncMode() alias has been deprecated, ' +
                'and will be removed in React 17+. Update your code to use ' +
                'ReactIs.isConcurrentMode() instead. It has the exact same API.',
            );
          }
        }

        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  (function (module) {
    if (process.env.NODE_ENV === 'production') {
      module.exports = requireReactIs_production_min();
    } else {
      module.exports = requireReactIs_development();
    }
  })(reactIs);
  return reactIs.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;

  var printWarning = function () {};

  if (process.env.NODE_ENV !== 'production') {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = requireHas();

    printWarning = function (text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {
        /**/
      }
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== 'production') {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') +
                  ': ' +
                  location +
                  ' type `' +
                  typeSpecName +
                  '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' +
                  typeof typeSpecs[typeSpecName] +
                  '`.' +
                  'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret,
            );
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') +
                ': type specification of ' +
                location +
                ' `' +
                typeSpecName +
                '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' +
                typeof error +
                '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).',
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''),
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== 'production') {
      loggedTypeFailures = {};
    }
  };

  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;

  var ReactIs = requireReactIs();
  var assign = require$$1;

  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has = requireHas();
  var checkPropTypes = requireCheckPropTypes();

  var printWarning = function () {};

  if (process.env.NODE_ENV !== 'production') {
    printWarning = function (text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bigint: createPrimitiveTypeChecker('bigint'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === 'object' ? data : {};
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== 'production') {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret,
      ) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types',
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                'You are manually calling a React.PropTypes validation ' +
                  'function for the `' +
                  propFullName +
                  '` prop on `' +
                  componentName +
                  '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                  'for details.',
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                'The ' +
                  location +
                  ' `' +
                  propFullName +
                  '` is marked as required ' +
                  ('in `' + componentName + '`, but its value is `null`.'),
              );
            }
            return new PropTypeError(
              'The ' +
                location +
                ' `' +
                propFullName +
                '` is marked as required in ' +
                ('`' + componentName + '`, but its value is `undefined`.'),
            );
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') +
              ('`' + expectedType + '`.'),
            { expectedType: expectedType },
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside arrayOf.',
          );
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'),
          );
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + '[' + i + ']',
            ReactPropTypesSecret,
          );
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement.'),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement type.'),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') +
              ('instance of `' + expectedClassName + '`.'),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== 'production') {
          if (arguments.length > 1) {
            printWarning(
              'Invalid arguments supplied to oneOf, expected an array, got ' +
                arguments.length +
                ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).',
            );
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` of value `' +
            String(propValue) +
            '` ' +
            ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'),
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside objectOf.',
          );
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'),
          );
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + '.' + key,
              ReactPropTypesSecret,
            );
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== 'production'
          ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.')
          : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' +
              getPostfixForTypeWarning(checker) +
              ' at index ' +
              i +
              '.',
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(
            props,
            propName,
            componentName,
            location,
            propFullName,
            ReactPropTypesSecret,
          );
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage =
          expectedTypes.length > 0
            ? ', expected one of type [' + expectedTypes.join(', ') + ']'
            : '';
        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` supplied to ' +
            ('`' + componentName + '`' + expectedTypesMessage + '.'),
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` supplied to ' +
              ('`' + componentName + '`, expected a ReactNode.'),
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError(
        (componentName || 'React class') +
          ': ' +
          location +
          ' type `' +
          propFullName +
          '.' +
          key +
          '` is invalid; ' +
          'it must be a function, usually from the `prop-types` package, but received `' +
          type +
          '`.',
      );
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.'),
          );
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== 'function') {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker),
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret,
          );
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.'),
          );
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has(shapeTypes, key) && typeof checker !== 'function') {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker),
            );
          }
          if (!checker) {
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` key `' +
                key +
                '` supplied to `' +
                componentName +
                '`.' +
                '\nBad object: ' +
                JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +
                JSON.stringify(Object.keys(shapeTypes), null, '  '),
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret,
          );
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;

  var ReactPropTypesSecret = requireReactPropTypesSecret();

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  factoryWithThrowingShims = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types',
      );
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction,
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes$2.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes$2.exports = requireFactoryWithThrowingShims()();
}

var Manager = (function () {
  function Manager() {
    _classCallCheck(this, Manager);

    _defineProperty(this, 'refs', {});
  }

  _createClass(Manager, [
    {
      key: 'add',
      value: function add(collection, ref) {
        if (!this.refs[collection]) {
          this.refs[collection] = [];
        }

        this.refs[collection].push(ref);
      },
    },
    {
      key: 'remove',
      value: function remove(collection, ref) {
        var index = this.getIndex(collection, ref);

        if (index !== -1) {
          this.refs[collection].splice(index, 1);
        }
      },
    },
    {
      key: 'isActive',
      value: function isActive() {
        return this.active;
      },
    },
    {
      key: 'getActive',
      value: function getActive() {
        var _this = this;

        return this.refs[this.active.collection].find(function (_ref) {
          var node = _ref.node;
          return node.sortableInfo.index == _this.active.index;
        });
      },
    },
    {
      key: 'getIndex',
      value: function getIndex(collection, ref) {
        return this.refs[collection].indexOf(ref);
      },
    },
    {
      key: 'getOrderedRefs',
      value: function getOrderedRefs() {
        var collection =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : this.active.collection;
        return this.refs[collection].sort(sortByIndex);
      },
    },
  ]);

  return Manager;
})();

function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}
function omit(obj, keysToOmit) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}
var events = {
  end: ['touchend', 'touchcancel', 'mouseup'],
  move: ['touchmove', 'mousemove'],
  start: ['touchstart', 'mousedown'],
};
var vendorPrefix = (function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return '';
  }

  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice
    .call(styles)
    .join('')
    .match(/-(moz|webkit|ms)-/) ||
    (styles.OLink === '' && ['', 'o']))[1];

  switch (pre) {
    case 'ms':
      return 'ms';

    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
})();
function setInlineStyles(node, styles) {
  Object.keys(styles).forEach(function (key) {
    node.style[key] = styles[key];
  });
}
function setTranslate3d(node, translate) {
  node.style[''.concat(vendorPrefix, 'Transform')] =
    translate == null ? '' : 'translate3d('.concat(translate.x, 'px,').concat(translate.y, 'px,0)');
}
function setTransitionDuration(node, duration) {
  node.style[''.concat(vendorPrefix, 'TransitionDuration')] =
    duration == null ? '' : ''.concat(duration, 'ms');
}
function closest(el, fn) {
  while (el) {
    if (fn(el)) {
      return el;
    }

    el = el.parentNode;
  }

  return null;
}
function limit(min, max, value) {
  return Math.max(min, Math.min(value, max));
}

function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }

  return 0;
}

function getElementMargin(element) {
  var style = window.getComputedStyle(element);
  return {
    bottom: getPixelValue(style.marginBottom),
    left: getPixelValue(style.marginLeft),
    right: getPixelValue(style.marginRight),
    top: getPixelValue(style.marginTop),
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName ? ''.concat(prefix, '(').concat(componentName, ')') : prefix;
}
function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
  var boundingClientRect = node.getBoundingClientRect();
  return {
    top: boundingClientRect.top + scrollDelta.top,
    left: boundingClientRect.left + scrollDelta.left,
  };
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY,
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY,
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY,
    };
  }
}
function isTouchEvent(event) {
  return (
    (event.touches && event.touches.length) || (event.changedTouches && event.changedTouches.length)
  );
}
function getEdgeOffset(node, parent) {
  var offset =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : {
          left: 0,
          top: 0,
        };

  if (!node) {
    return undefined;
  }

  var nodeOffset = {
    left: offset.left + node.offsetLeft,
    top: offset.top + node.offsetTop,
  };

  if (node.parentNode === parent) {
    return nodeOffset;
  }

  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getTargetIndex(newIndex, prevIndex, oldIndex) {
  if (newIndex < oldIndex && newIndex > prevIndex) {
    return newIndex - 1;
  } else if (newIndex > oldIndex && newIndex < prevIndex) {
    return newIndex + 1;
  } else {
    return newIndex;
  }
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset,
    width = _ref.width,
    height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = 'px';

  if (typeof lockOffset === 'string') {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    invariant_1(
      match !== null,
      'lockOffset value should be a number or a string of a ' +
        'number followed by "px" or "%". Given %s',
      lockOffset,
    );
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }

  invariant_1(
    isFinite(offsetX) && isFinite(offsetY),
    'lockOffset value should be a finite. Given %s',
    lockOffset,
  );

  if (unit === '%') {
    offsetX = (offsetX * width) / 100;
    offsetY = (offsetY * height) / 100;
  }

  return {
    x: offsetX,
    y: offsetY,
  };
}
function getLockPixelOffsets(_ref2) {
  var height = _ref2.height,
    width = _ref2.width,
    lockOffset = _ref2.lockOffset;
  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
  invariant_1(
    offsets.length === 2,
    'lockOffset prop of SortableContainer should be a single ' +
      'value or an array of exactly two values. Given %s',
    lockOffset,
  );

  var _offsets = _slicedToArray(offsets, 2),
    minLockOffset = _offsets[0],
    maxLockOffset = _offsets[1];

  return [
    getLockPixelOffset({
      height: height,
      lockOffset: minLockOffset,
      width: width,
    }),
    getLockPixelOffset({
      height: height,
      lockOffset: maxLockOffset,
      width: width,
    }),
  ];
}

function isScrollable(el) {
  var computedStyle = window.getComputedStyle(el);
  var overflowRegex = /(auto|scroll)/;
  var properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.find(function (property) {
    return overflowRegex.test(computedStyle[property]);
  });
}

function getScrollingParent(el) {
  if (!(el instanceof HTMLElement)) {
    return null;
  } else if (isScrollable(el)) {
    return el;
  } else {
    return getScrollingParent(el.parentNode);
  }
}
function getContainerGridGap(element) {
  var style = window.getComputedStyle(element);

  if (style.display === 'grid') {
    return {
      x: getPixelValue(style.gridColumnGap),
      y: getPixelValue(style.gridRowGap),
    };
  }

  return {
    x: 0,
    y: 0,
  };
}
var KEYCODE = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
var NodeType = {
  Anchor: 'A',
  Button: 'BUTTON',
  Canvas: 'CANVAS',
  Input: 'INPUT',
  Option: 'OPTION',
  Textarea: 'TEXTAREA',
  Select: 'SELECT',
};
function cloneNode(node) {
  var selector = 'input, textarea, select, canvas, [contenteditable]';
  var fields = node.querySelectorAll(selector);
  var clonedNode = node.cloneNode(true);

  var clonedFields = _toConsumableArray(clonedNode.querySelectorAll(selector));

  clonedFields.forEach(function (field, i) {
    if (field.type !== 'file') {
      field.value = fields[i].value;
    }

    if (field.type === 'radio' && field.name) {
      field.name = '__sortableClone__'.concat(field.name);
    }

    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
      var destCtx = field.getContext('2d');
      destCtx.drawImage(fields[i], 0, 0);
    }
  });
  return clonedNode;
}

function sortableHandle(WrappedComponent) {
  var _class, _temp;

  var config =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          withRef: false,
        };
  return (
    (_temp = _class =
      (function (_React$Component) {
        _inherits(WithSortableHandle, _React$Component);

        function WithSortableHandle() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WithSortableHandle);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(
            this,
            (_getPrototypeOf2 = _getPrototypeOf(WithSortableHandle)).call.apply(
              _getPrototypeOf2,
              [this].concat(args),
            ),
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'wrappedInstance',
            createRef(),
          );

          return _this;
        }

        _createClass(WithSortableHandle, [
          {
            key: 'componentDidMount',
            value: function componentDidMount() {
              var node = findDOMNode(this);
              node.sortableHandle = true;
            },
          },
          {
            key: 'getWrappedInstance',
            value: function getWrappedInstance() {
              invariant_1(
                config.withRef,
                'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call',
              );
              return this.wrappedInstance.current;
            },
          },
          {
            key: 'render',
            value: function render() {
              var ref = config.withRef ? this.wrappedInstance : null;
              return createElement(
                WrappedComponent,
                _extends(
                  {
                    ref: ref,
                  },
                  this.props,
                ),
              );
            },
          },
        ]);

        return WithSortableHandle;
      })(Component)),
    _defineProperty(_class, 'displayName', provideDisplayName('sortableHandle', WrappedComponent)),
    _temp
  );
}
function isSortableHandle(node) {
  return node.sortableHandle != null;
}

var AutoScroller = (function () {
  function AutoScroller(container, onScrollCallback) {
    _classCallCheck(this, AutoScroller);

    this.container = container;
    this.onScrollCallback = onScrollCallback;
  }

  _createClass(AutoScroller, [
    {
      key: 'clear',
      value: function clear() {
        if (this.interval == null) {
          return;
        }

        clearInterval(this.interval);
        this.interval = null;
      },
    },
    {
      key: 'update',
      value: function update(_ref) {
        var _this = this;

        var translate = _ref.translate,
          minTranslate = _ref.minTranslate,
          maxTranslate = _ref.maxTranslate,
          width = _ref.width,
          height = _ref.height;
        var direction = {
          x: 0,
          y: 0,
        };
        var speed = {
          x: 1,
          y: 1,
        };
        var acceleration = {
          x: 10,
          y: 10,
        };
        var _this$container = this.container,
          scrollTop = _this$container.scrollTop,
          scrollLeft = _this$container.scrollLeft,
          scrollHeight = _this$container.scrollHeight,
          scrollWidth = _this$container.scrollWidth,
          clientHeight = _this$container.clientHeight,
          clientWidth = _this$container.clientWidth;
        var isTop = scrollTop === 0;
        var isBottom = scrollHeight - scrollTop - clientHeight === 0;
        var isLeft = scrollLeft === 0;
        var isRight = scrollWidth - scrollLeft - clientWidth === 0;

        if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
          direction.y = 1;
          speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
        } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
          direction.x = 1;
          speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
        } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
          direction.y = -1;
          speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
        } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
          direction.x = -1;
          speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
        }

        if (this.interval) {
          this.clear();
          this.isAutoScrolling = false;
        }

        if (direction.x !== 0 || direction.y !== 0) {
          this.interval = setInterval(function () {
            _this.isAutoScrolling = true;
            var offset = {
              left: speed.x * direction.x,
              top: speed.y * direction.y,
            };
            _this.container.scrollTop += offset.top;
            _this.container.scrollLeft += offset.left;

            _this.onScrollCallback(offset);
          }, 5);
        }
      },
    },
  ]);

  return AutoScroller;
})();

function defaultGetHelperDimensions(_ref) {
  var node = _ref.node;
  return {
    height: node.offsetHeight,
    width: node.offsetWidth,
  };
}

function defaultShouldCancelStart(event) {
  var interactiveElements = [
    NodeType.Input,
    NodeType.Textarea,
    NodeType.Select,
    NodeType.Option,
    NodeType.Button,
  ];

  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
    return true;
  }

  if (
    closest(event.target, function (el) {
      return el.contentEditable === 'true';
    })
  ) {
    return true;
  }

  return false;
}

var propTypes = {
  axis: propTypes$2.exports.oneOf(['x', 'y', 'xy']),
  contentWindow: propTypes$2.exports.any,
  disableAutoscroll: propTypes$2.exports.bool,
  distance: propTypes$2.exports.number,
  getContainer: propTypes$2.exports.func,
  getHelperDimensions: propTypes$2.exports.func,
  helperClass: propTypes$2.exports.string,
  helperContainer: propTypes$2.exports.oneOfType([
    propTypes$2.exports.func,
    typeof HTMLElement === 'undefined'
      ? propTypes$2.exports.any
      : propTypes$2.exports.instanceOf(HTMLElement),
  ]),
  hideSortableGhost: propTypes$2.exports.bool,
  keyboardSortingTransitionDuration: propTypes$2.exports.number,
  lockAxis: propTypes$2.exports.string,
  lockOffset: propTypes$2.exports.oneOfType([
    propTypes$2.exports.number,
    propTypes$2.exports.string,
    propTypes$2.exports.arrayOf(
      propTypes$2.exports.oneOfType([propTypes$2.exports.number, propTypes$2.exports.string]),
    ),
  ]),
  lockToContainerEdges: propTypes$2.exports.bool,
  onSortEnd: propTypes$2.exports.func,
  onSortMove: propTypes$2.exports.func,
  onSortOver: propTypes$2.exports.func,
  onSortStart: propTypes$2.exports.func,
  pressDelay: propTypes$2.exports.number,
  pressThreshold: propTypes$2.exports.number,
  keyCodes: propTypes$2.exports.shape({
    lift: propTypes$2.exports.arrayOf(propTypes$2.exports.number),
    drop: propTypes$2.exports.arrayOf(propTypes$2.exports.number),
    cancel: propTypes$2.exports.arrayOf(propTypes$2.exports.number),
    up: propTypes$2.exports.arrayOf(propTypes$2.exports.number),
    down: propTypes$2.exports.arrayOf(propTypes$2.exports.number),
  }),
  shouldCancelStart: propTypes$2.exports.func,
  transitionDuration: propTypes$2.exports.number,
  updateBeforeSortStart: propTypes$2.exports.func,
  useDragHandle: propTypes$2.exports.bool,
  useWindowAsScrollContainer: propTypes$2.exports.bool,
};
var defaultKeyCodes = {
  lift: [KEYCODE.SPACE],
  drop: [KEYCODE.SPACE],
  cancel: [KEYCODE.ESC],
  up: [KEYCODE.UP, KEYCODE.LEFT],
  down: [KEYCODE.DOWN, KEYCODE.RIGHT],
};
var defaultProps = {
  axis: 'y',
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: '50%',
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: defaultKeyCodes,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false,
};
var omittedProps = Object.keys(propTypes);
function validateProps(props) {
  invariant_1(
    !(props.distance && props.pressDelay),
    'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.',
  );
}

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, value);
}
var SortableContext = createContext({
  manager: {},
});
function sortableContainer(WrappedComponent) {
  var _class, _temp;

  var config =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          withRef: false,
        };
  return (
    (_temp = _class =
      (function (_React$Component) {
        _inherits(WithSortableContainer, _React$Component);

        function WithSortableContainer(props) {
          var _this;

          _classCallCheck(this, WithSortableContainer);

          _this = _possibleConstructorReturn(
            this,
            _getPrototypeOf(WithSortableContainer).call(this, props),
          );

          _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'state', {});

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'handleStart',
            function (event) {
              var _this$props = _this.props,
                distance = _this$props.distance,
                shouldCancelStart = _this$props.shouldCancelStart;

              if (event.button === 2 || shouldCancelStart(event)) {
                return;
              }

              _this.touched = true;
              _this.position = getPosition(event);
              var node = closest(event.target, function (el) {
                return el.sortableInfo != null;
              });

              if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
                var useDragHandle = _this.props.useDragHandle;
                var _node$sortableInfo = node.sortableInfo,
                  index = _node$sortableInfo.index,
                  collection = _node$sortableInfo.collection,
                  disabled = _node$sortableInfo.disabled;

                if (disabled) {
                  return;
                }

                if (useDragHandle && !closest(event.target, isSortableHandle)) {
                  return;
                }

                _this.manager.active = {
                  collection: collection,
                  index: index,
                };

                if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
                  event.preventDefault();
                }

                if (!distance) {
                  if (_this.props.pressDelay === 0) {
                    _this.handlePress(event);
                  } else {
                    _this.pressTimer = setTimeout(function () {
                      return _this.handlePress(event);
                    }, _this.props.pressDelay);
                  }
                }
              }
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'nodeIsChild',
            function (node) {
              return node.sortableInfo.manager === _this.manager;
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'handleMove',
            function (event) {
              var _this$props2 = _this.props,
                distance = _this$props2.distance,
                pressThreshold = _this$props2.pressThreshold;

              if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
                var position = getPosition(event);
                var delta = {
                  x: _this.position.x - position.x,
                  y: _this.position.y - position.y,
                };
                var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
                _this.delta = delta;

                if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
                  clearTimeout(_this.cancelTimer);
                  _this.cancelTimer = setTimeout(_this.cancel, 0);
                } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
                  _this.handlePress(event);
                }
              }
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'handleEnd',
            function () {
              _this.touched = false;

              _this.cancel();
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'cancel',
            function () {
              var distance = _this.props.distance;
              var sorting = _this.state.sorting;

              if (!sorting) {
                if (!distance) {
                  clearTimeout(_this.pressTimer);
                }

                _this.manager.active = null;
              }
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'handlePress',
            function (event) {
              try {
                var active = _this.manager.getActive();

                var _temp6 = (function () {
                  if (active) {
                    var _temp7 = function _temp7() {
                      var index = _node.sortableInfo.index;
                      var margin = getElementMargin(_node);
                      var gridGap = getContainerGridGap(_this.container);

                      var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();

                      var dimensions = _getHelperDimensions({
                        index: index,
                        node: _node,
                        collection: _collection,
                      });

                      _this.node = _node;
                      _this.margin = margin;
                      _this.gridGap = gridGap;
                      _this.width = dimensions.width;
                      _this.height = dimensions.height;
                      _this.marginOffset = {
                        x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                        y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y),
                      };
                      _this.boundingClientRect = _node.getBoundingClientRect();
                      _this.containerBoundingRect = containerBoundingRect;
                      _this.index = index;
                      _this.newIndex = index;
                      _this.axis = {
                        x: _axis.indexOf('x') >= 0,
                        y: _axis.indexOf('y') >= 0,
                      };
                      _this.offsetEdge = getEdgeOffset(_node, _this.container);

                      if (_isKeySorting) {
                        _this.initialOffset = getPosition(
                          _objectSpread$1({}, event, {
                            pageX: _this.boundingClientRect.left,
                            pageY: _this.boundingClientRect.top,
                          }),
                        );
                      } else {
                        _this.initialOffset = getPosition(event);
                      }

                      _this.initialScroll = {
                        left: _this.scrollContainer.scrollLeft,
                        top: _this.scrollContainer.scrollTop,
                      };
                      _this.initialWindowScroll = {
                        left: window.pageXOffset,
                        top: window.pageYOffset,
                      };
                      _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                      setInlineStyles(_this.helper, {
                        boxSizing: 'border-box',
                        height: ''.concat(_this.height, 'px'),
                        left: ''.concat(_this.boundingClientRect.left - margin.left, 'px'),
                        pointerEvents: 'none',
                        position: 'fixed',
                        top: ''.concat(_this.boundingClientRect.top - margin.top, 'px'),
                        width: ''.concat(_this.width, 'px'),
                      });

                      if (_isKeySorting) {
                        _this.helper.focus();
                      }

                      if (_hideSortableGhost) {
                        _this.sortableGhost = _node;
                        setInlineStyles(_node, {
                          opacity: 0,
                          visibility: 'hidden',
                        });
                      }

                      _this.minTranslate = {};
                      _this.maxTranslate = {};

                      if (_isKeySorting) {
                        var _ref = _useWindowAsScrollContainer
                            ? {
                                top: 0,
                                left: 0,
                                width: _this.contentWindow.innerWidth,
                                height: _this.contentWindow.innerHeight,
                              }
                            : _this.containerBoundingRect,
                          containerTop = _ref.top,
                          containerLeft = _ref.left,
                          containerWidth = _ref.width,
                          containerHeight = _ref.height;

                        var containerBottom = containerTop + containerHeight;
                        var containerRight = containerLeft + containerWidth;

                        if (_this.axis.x) {
                          _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                          _this.maxTranslate.x =
                            containerRight - (_this.boundingClientRect.left + _this.width);
                        }

                        if (_this.axis.y) {
                          _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                          _this.maxTranslate.y =
                            containerBottom - (_this.boundingClientRect.top + _this.height);
                        }
                      } else {
                        if (_this.axis.x) {
                          _this.minTranslate.x =
                            (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) -
                            _this.boundingClientRect.left -
                            _this.width / 2;
                          _this.maxTranslate.x =
                            (_useWindowAsScrollContainer
                              ? _this.contentWindow.innerWidth
                              : containerBoundingRect.left + containerBoundingRect.width) -
                            _this.boundingClientRect.left -
                            _this.width / 2;
                        }

                        if (_this.axis.y) {
                          _this.minTranslate.y =
                            (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) -
                            _this.boundingClientRect.top -
                            _this.height / 2;
                          _this.maxTranslate.y =
                            (_useWindowAsScrollContainer
                              ? _this.contentWindow.innerHeight
                              : containerBoundingRect.top + containerBoundingRect.height) -
                            _this.boundingClientRect.top -
                            _this.height / 2;
                        }
                      }

                      if (_helperClass) {
                        _helperClass.split(' ').forEach(function (className) {
                          return _this.helper.classList.add(className);
                        });
                      }

                      _this.listenerNode = event.touches ? event.target : _this.contentWindow;

                      if (_isKeySorting) {
                        _this.listenerNode.addEventListener('wheel', _this.handleKeyEnd, true);

                        _this.listenerNode.addEventListener('mousedown', _this.handleKeyEnd, true);

                        _this.listenerNode.addEventListener('keydown', _this.handleKeyDown);
                      } else {
                        events.move.forEach(function (eventName) {
                          return _this.listenerNode.addEventListener(
                            eventName,
                            _this.handleSortMove,
                            false,
                          );
                        });
                        events.end.forEach(function (eventName) {
                          return _this.listenerNode.addEventListener(
                            eventName,
                            _this.handleSortEnd,
                            false,
                          );
                        });
                      }

                      _this.setState({
                        sorting: true,
                        sortingIndex: index,
                      });

                      if (_onSortStart) {
                        _onSortStart(
                          {
                            node: _node,
                            index: index,
                            collection: _collection,
                            isKeySorting: _isKeySorting,
                            nodes: _this.manager.getOrderedRefs(),
                            helper: _this.helper,
                          },
                          event,
                        );
                      }

                      if (_isKeySorting) {
                        _this.keyMove(0);
                      }
                    };

                    var _this$props3 = _this.props,
                      _axis = _this$props3.axis,
                      _getHelperDimensions = _this$props3.getHelperDimensions,
                      _helperClass = _this$props3.helperClass,
                      _hideSortableGhost = _this$props3.hideSortableGhost,
                      updateBeforeSortStart = _this$props3.updateBeforeSortStart,
                      _onSortStart = _this$props3.onSortStart,
                      _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
                    var _node = active.node,
                      _collection = active.collection;
                    var _isKeySorting = _this.manager.isKeySorting;

                    var _temp8 = (function () {
                      if (typeof updateBeforeSortStart === 'function') {
                        _this._awaitingUpdateBeforeSortStart = true;

                        var _temp9 = _finallyRethrows(
                          function () {
                            var index = _node.sortableInfo.index;
                            return Promise.resolve(
                              updateBeforeSortStart(
                                {
                                  collection: _collection,
                                  index: index,
                                  node: _node,
                                  isKeySorting: _isKeySorting,
                                },
                                event,
                              ),
                            ).then(function () {});
                          },
                          function (_wasThrown, _result) {
                            _this._awaitingUpdateBeforeSortStart = false;
                            if (_wasThrown) throw _result;
                            return _result;
                          },
                        );

                        if (_temp9 && _temp9.then) return _temp9.then(function () {});
                      }
                    })();

                    return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
                  }
                })();

                return Promise.resolve(
                  _temp6 && _temp6.then ? _temp6.then(function () {}) : void 0,
                );
              } catch (e) {
                return Promise.reject(e);
              }
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'handleSortMove',
            function (event) {
              var onSortMove = _this.props.onSortMove;

              if (typeof event.preventDefault === 'function' && event.cancelable) {
                event.preventDefault();
              }

              _this.updateHelperPosition(event);

              _this.animateNodes();

              _this.autoscroll();

              if (onSortMove) {
                onSortMove(event);
              }
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'handleSortEnd',
            function (event) {
              var _this$props4 = _this.props,
                hideSortableGhost = _this$props4.hideSortableGhost,
                onSortEnd = _this$props4.onSortEnd;
              var _this$manager = _this.manager,
                collection = _this$manager.active.collection,
                isKeySorting = _this$manager.isKeySorting;

              var nodes = _this.manager.getOrderedRefs();

              if (_this.listenerNode) {
                if (isKeySorting) {
                  _this.listenerNode.removeEventListener('wheel', _this.handleKeyEnd, true);

                  _this.listenerNode.removeEventListener('mousedown', _this.handleKeyEnd, true);

                  _this.listenerNode.removeEventListener('keydown', _this.handleKeyDown);
                } else {
                  events.move.forEach(function (eventName) {
                    return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
                  });
                  events.end.forEach(function (eventName) {
                    return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
                  });
                }
              }

              _this.helper.parentNode.removeChild(_this.helper);

              if (hideSortableGhost && _this.sortableGhost) {
                setInlineStyles(_this.sortableGhost, {
                  opacity: '',
                  visibility: '',
                });
              }

              for (var i = 0, len = nodes.length; i < len; i++) {
                var _node2 = nodes[i];
                var el = _node2.node;
                _node2.edgeOffset = null;
                _node2.boundingClientRect = null;
                setTranslate3d(el, null);
                setTransitionDuration(el, null);
                _node2.translate = null;
              }

              _this.autoScroller.clear();

              _this.manager.active = null;
              _this.manager.isKeySorting = false;

              _this.setState({
                sorting: false,
                sortingIndex: null,
              });

              if (typeof onSortEnd === 'function') {
                onSortEnd(
                  {
                    collection: collection,
                    newIndex: _this.newIndex,
                    oldIndex: _this.index,
                    isKeySorting: isKeySorting,
                    nodes: nodes,
                  },
                  event,
                );
              }

              _this.touched = false;
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'autoscroll',
            function () {
              var disableAutoscroll = _this.props.disableAutoscroll;
              var isKeySorting = _this.manager.isKeySorting;

              if (disableAutoscroll) {
                _this.autoScroller.clear();

                return;
              }

              if (isKeySorting) {
                var translate = _objectSpread$1({}, _this.translate);

                var scrollX = 0;
                var scrollY = 0;

                if (_this.axis.x) {
                  translate.x = Math.min(
                    _this.maxTranslate.x,
                    Math.max(_this.minTranslate.x, _this.translate.x),
                  );
                  scrollX = _this.translate.x - translate.x;
                }

                if (_this.axis.y) {
                  translate.y = Math.min(
                    _this.maxTranslate.y,
                    Math.max(_this.minTranslate.y, _this.translate.y),
                  );
                  scrollY = _this.translate.y - translate.y;
                }

                _this.translate = translate;
                setTranslate3d(_this.helper, _this.translate);
                _this.scrollContainer.scrollLeft += scrollX;
                _this.scrollContainer.scrollTop += scrollY;
                return;
              }

              _this.autoScroller.update({
                height: _this.height,
                maxTranslate: _this.maxTranslate,
                minTranslate: _this.minTranslate,
                translate: _this.translate,
                width: _this.width,
              });
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'onAutoScroll',
            function (offset) {
              _this.translate.x += offset.left;
              _this.translate.y += offset.top;

              _this.animateNodes();
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'handleKeyDown',
            function (event) {
              var keyCode = event.keyCode;
              var _this$props5 = _this.props,
                shouldCancelStart = _this$props5.shouldCancelStart,
                _this$props5$keyCodes = _this$props5.keyCodes,
                customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;

              var keyCodes = _objectSpread$1({}, defaultKeyCodes, customKeyCodes);

              if (
                (_this.manager.active && !_this.manager.isKeySorting) ||
                (!_this.manager.active &&
                  (!keyCodes.lift.includes(keyCode) ||
                    shouldCancelStart(event) ||
                    !_this.isValidSortingTarget(event)))
              ) {
                return;
              }

              event.stopPropagation();
              event.preventDefault();

              if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
                _this.keyLift(event);
              } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
                _this.keyDrop(event);
              } else if (keyCodes.cancel.includes(keyCode)) {
                _this.newIndex = _this.manager.active.index;

                _this.keyDrop(event);
              } else if (keyCodes.up.includes(keyCode)) {
                _this.keyMove(-1);
              } else if (keyCodes.down.includes(keyCode)) {
                _this.keyMove(1);
              }
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'keyLift',
            function (event) {
              var target = event.target;
              var node = closest(target, function (el) {
                return el.sortableInfo != null;
              });
              var _node$sortableInfo2 = node.sortableInfo,
                index = _node$sortableInfo2.index,
                collection = _node$sortableInfo2.collection;
              _this.initialFocusedNode = target;
              _this.manager.isKeySorting = true;
              _this.manager.active = {
                index: index,
                collection: collection,
              };

              _this.handlePress(event);
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'keyMove',
            function (shift) {
              var nodes = _this.manager.getOrderedRefs();

              var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
              var newIndex = _this.newIndex + shift;
              var prevIndex = _this.newIndex;

              if (newIndex < 0 || newIndex > lastIndex) {
                return;
              }

              _this.prevIndex = prevIndex;
              _this.newIndex = newIndex;
              var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
              var target = nodes.find(function (_ref2) {
                var node = _ref2.node;
                return node.sortableInfo.index === targetIndex;
              });
              var targetNode = target.node;
              var scrollDelta = _this.containerScrollDelta;
              var targetBoundingClientRect =
                target.boundingClientRect ||
                getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
              var targetTranslate = target.translate || {
                x: 0,
                y: 0,
              };
              var targetPosition = {
                top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
                left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left,
              };
              var shouldAdjustForSize = prevIndex < newIndex;
              var sizeAdjustment = {
                x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
                y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0,
              };

              _this.handleSortMove({
                pageX: targetPosition.left + sizeAdjustment.x,
                pageY: targetPosition.top + sizeAdjustment.y,
                ignoreTransition: shift === 0,
              });
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'keyDrop',
            function (event) {
              _this.handleSortEnd(event);

              if (_this.initialFocusedNode) {
                _this.initialFocusedNode.focus();
              }
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'handleKeyEnd',
            function (event) {
              if (_this.manager.active) {
                _this.keyDrop(event);
              }
            },
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'isValidSortingTarget',
            function (event) {
              var useDragHandle = _this.props.useDragHandle;
              var target = event.target;
              var node = closest(target, function (el) {
                return el.sortableInfo != null;
              });
              return (
                node &&
                node.sortableInfo &&
                !node.sortableInfo.disabled &&
                (useDragHandle ? isSortableHandle(target) : target.sortableInfo)
              );
            },
          );

          var manager = new Manager();
          validateProps(props);
          _this.manager = manager;
          _this.wrappedInstance = createRef();
          _this.sortableContextValue = {
            manager: manager,
          };
          _this.events = {
            end: _this.handleEnd,
            move: _this.handleMove,
            start: _this.handleStart,
          };
          return _this;
        }

        _createClass(WithSortableContainer, [
          {
            key: 'componentDidMount',
            value: function componentDidMount() {
              var _this2 = this;

              var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
              var container = this.getContainer();
              Promise.resolve(container).then(function (containerNode) {
                _this2.container = containerNode;
                _this2.document = _this2.container.ownerDocument || document;
                var contentWindow =
                  _this2.props.contentWindow || _this2.document.defaultView || window;
                _this2.contentWindow =
                  typeof contentWindow === 'function' ? contentWindow() : contentWindow;
                _this2.scrollContainer = useWindowAsScrollContainer
                  ? _this2.document.scrollingElement || _this2.document.documentElement
                  : getScrollingParent(_this2.container) || _this2.container;
                _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
                Object.keys(_this2.events).forEach(function (key) {
                  return events[key].forEach(function (eventName) {
                    return _this2.container.addEventListener(eventName, _this2.events[key], false);
                  });
                });

                _this2.container.addEventListener('keydown', _this2.handleKeyDown);
              });
            },
          },
          {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
              var _this3 = this;

              if (this.helper && this.helper.parentNode) {
                this.helper.parentNode.removeChild(this.helper);
              }

              if (!this.container) {
                return;
              }

              Object.keys(this.events).forEach(function (key) {
                return events[key].forEach(function (eventName) {
                  return _this3.container.removeEventListener(eventName, _this3.events[key]);
                });
              });
              this.container.removeEventListener('keydown', this.handleKeyDown);
            },
          },
          {
            key: 'updateHelperPosition',
            value: function updateHelperPosition(event) {
              var _this$props6 = this.props,
                lockAxis = _this$props6.lockAxis,
                lockOffset = _this$props6.lockOffset,
                lockToContainerEdges = _this$props6.lockToContainerEdges,
                transitionDuration = _this$props6.transitionDuration,
                _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration,
                keyboardSortingTransitionDuration =
                  _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
              var isKeySorting = this.manager.isKeySorting;
              var ignoreTransition = event.ignoreTransition;
              var offset = getPosition(event);
              var translate = {
                x: offset.x - this.initialOffset.x,
                y: offset.y - this.initialOffset.y,
              };
              translate.y -= window.pageYOffset - this.initialWindowScroll.top;
              translate.x -= window.pageXOffset - this.initialWindowScroll.left;
              this.translate = translate;

              if (lockToContainerEdges) {
                var _getLockPixelOffsets = getLockPixelOffsets({
                    height: this.height,
                    lockOffset: lockOffset,
                    width: this.width,
                  }),
                  _getLockPixelOffsets2 = _slicedToArray(_getLockPixelOffsets, 2),
                  minLockOffset = _getLockPixelOffsets2[0],
                  maxLockOffset = _getLockPixelOffsets2[1];

                var minOffset = {
                  x: this.width / 2 - minLockOffset.x,
                  y: this.height / 2 - minLockOffset.y,
                };
                var maxOffset = {
                  x: this.width / 2 - maxLockOffset.x,
                  y: this.height / 2 - maxLockOffset.y,
                };
                translate.x = limit(
                  this.minTranslate.x + minOffset.x,
                  this.maxTranslate.x - maxOffset.x,
                  translate.x,
                );
                translate.y = limit(
                  this.minTranslate.y + minOffset.y,
                  this.maxTranslate.y - maxOffset.y,
                  translate.y,
                );
              }

              if (lockAxis === 'x') {
                translate.y = 0;
              } else if (lockAxis === 'y') {
                translate.x = 0;
              }

              if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
                setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
              }

              setTranslate3d(this.helper, translate);
            },
          },
          {
            key: 'animateNodes',
            value: function animateNodes() {
              var _this$props7 = this.props,
                transitionDuration = _this$props7.transitionDuration,
                hideSortableGhost = _this$props7.hideSortableGhost,
                onSortOver = _this$props7.onSortOver;
              var containerScrollDelta = this.containerScrollDelta,
                windowScrollDelta = this.windowScrollDelta;
              var nodes = this.manager.getOrderedRefs();
              var sortingOffset = {
                left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
                top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top,
              };
              var isKeySorting = this.manager.isKeySorting;
              var prevIndex = this.newIndex;
              this.newIndex = null;

              for (var i = 0, len = nodes.length; i < len; i++) {
                var _node3 = nodes[i].node;
                var index = _node3.sortableInfo.index;
                var width = _node3.offsetWidth;
                var height = _node3.offsetHeight;
                var offset = {
                  height: this.height > height ? height / 2 : this.height / 2,
                  width: this.width > width ? width / 2 : this.width / 2,
                };
                var mustShiftBackward = isKeySorting && index > this.index && index <= prevIndex;
                var mustShiftForward = isKeySorting && index < this.index && index >= prevIndex;
                var translate = {
                  x: 0,
                  y: 0,
                };
                var edgeOffset = nodes[i].edgeOffset;

                if (!edgeOffset) {
                  edgeOffset = getEdgeOffset(_node3, this.container);
                  nodes[i].edgeOffset = edgeOffset;

                  if (isKeySorting) {
                    nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(
                      _node3,
                      containerScrollDelta,
                    );
                  }
                }

                var nextNode = i < nodes.length - 1 && nodes[i + 1];
                var prevNode = i > 0 && nodes[i - 1];

                if (nextNode && !nextNode.edgeOffset) {
                  nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);

                  if (isKeySorting) {
                    nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(
                      nextNode.node,
                      containerScrollDelta,
                    );
                  }
                }

                if (index === this.index) {
                  if (hideSortableGhost) {
                    this.sortableGhost = _node3;
                    setInlineStyles(_node3, {
                      opacity: 0,
                      visibility: 'hidden',
                    });
                  }

                  continue;
                }

                if (transitionDuration) {
                  setTransitionDuration(_node3, transitionDuration);
                }

                if (this.axis.x) {
                  if (this.axis.y) {
                    if (
                      mustShiftForward ||
                      (index < this.index &&
                        ((sortingOffset.left + windowScrollDelta.left - offset.width <=
                          edgeOffset.left &&
                          sortingOffset.top + windowScrollDelta.top <=
                            edgeOffset.top + offset.height) ||
                          sortingOffset.top + windowScrollDelta.top + offset.height <=
                            edgeOffset.top))
                    ) {
                      translate.x = this.width + this.marginOffset.x;

                      if (
                        edgeOffset.left + translate.x >
                        this.containerBoundingRect.width - offset.width
                      ) {
                        if (nextNode) {
                          translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                          translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                        }
                      }

                      if (this.newIndex === null) {
                        this.newIndex = index;
                      }
                    } else if (
                      mustShiftBackward ||
                      (index > this.index &&
                        ((sortingOffset.left + windowScrollDelta.left + offset.width >=
                          edgeOffset.left &&
                          sortingOffset.top + windowScrollDelta.top + offset.height >=
                            edgeOffset.top) ||
                          sortingOffset.top + windowScrollDelta.top + offset.height >=
                            edgeOffset.top + height))
                    ) {
                      translate.x = -(this.width + this.marginOffset.x);

                      if (
                        edgeOffset.left + translate.x <
                        this.containerBoundingRect.left + offset.width
                      ) {
                        if (prevNode) {
                          translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                          translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                        }
                      }

                      this.newIndex = index;
                    }
                  } else {
                    if (
                      mustShiftBackward ||
                      (index > this.index &&
                        sortingOffset.left + windowScrollDelta.left + offset.width >=
                          edgeOffset.left)
                    ) {
                      translate.x = -(this.width + this.marginOffset.x);
                      this.newIndex = index;
                    } else if (
                      mustShiftForward ||
                      (index < this.index &&
                        sortingOffset.left + windowScrollDelta.left <=
                          edgeOffset.left + offset.width)
                    ) {
                      translate.x = this.width + this.marginOffset.x;

                      if (this.newIndex == null) {
                        this.newIndex = index;
                      }
                    }
                  }
                } else if (this.axis.y) {
                  if (
                    mustShiftBackward ||
                    (index > this.index &&
                      sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top)
                  ) {
                    translate.y = -(this.height + this.marginOffset.y);
                    this.newIndex = index;
                  } else if (
                    mustShiftForward ||
                    (index < this.index &&
                      sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height)
                  ) {
                    translate.y = this.height + this.marginOffset.y;

                    if (this.newIndex == null) {
                      this.newIndex = index;
                    }
                  }
                }

                setTranslate3d(_node3, translate);
                nodes[i].translate = translate;
              }

              if (this.newIndex == null) {
                this.newIndex = this.index;
              }

              if (isKeySorting) {
                this.newIndex = prevIndex;
              }

              var oldIndex = isKeySorting ? this.prevIndex : prevIndex;

              if (onSortOver && this.newIndex !== oldIndex) {
                onSortOver({
                  collection: this.manager.active.collection,
                  index: this.index,
                  newIndex: this.newIndex,
                  oldIndex: oldIndex,
                  isKeySorting: isKeySorting,
                  nodes: nodes,
                  helper: this.helper,
                });
              }
            },
          },
          {
            key: 'getWrappedInstance',
            value: function getWrappedInstance() {
              invariant_1(
                config.withRef,
                'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call',
              );
              return this.wrappedInstance.current;
            },
          },
          {
            key: 'getContainer',
            value: function getContainer() {
              var getContainer = this.props.getContainer;

              if (typeof getContainer !== 'function') {
                return findDOMNode(this);
              }

              return getContainer(config.withRef ? this.getWrappedInstance() : undefined);
            },
          },
          {
            key: 'render',
            value: function render() {
              var ref = config.withRef ? this.wrappedInstance : null;
              return createElement(
                SortableContext.Provider,
                {
                  value: this.sortableContextValue,
                },
                createElement(
                  WrappedComponent,
                  _extends(
                    {
                      ref: ref,
                    },
                    omit(this.props, omittedProps),
                  ),
                ),
              );
            },
          },
          {
            key: 'helperContainer',
            get: function get() {
              var helperContainer = this.props.helperContainer;

              if (typeof helperContainer === 'function') {
                return helperContainer();
              }

              return this.props.helperContainer || this.document.body;
            },
          },
          {
            key: 'containerScrollDelta',
            get: function get() {
              var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;

              if (useWindowAsScrollContainer) {
                return {
                  left: 0,
                  top: 0,
                };
              }

              return {
                left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                top: this.scrollContainer.scrollTop - this.initialScroll.top,
              };
            },
          },
          {
            key: 'windowScrollDelta',
            get: function get() {
              return {
                left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
                top: this.contentWindow.pageYOffset - this.initialWindowScroll.top,
              };
            },
          },
        ]);

        return WithSortableContainer;
      })(Component)),
    _defineProperty(_class, 'displayName', provideDisplayName('sortableList', WrappedComponent)),
    _defineProperty(_class, 'defaultProps', defaultProps),
    _defineProperty(_class, 'propTypes', propTypes),
    _temp
  );
}

var propTypes$1 = {
  index: propTypes$2.exports.number.isRequired,
  collection: propTypes$2.exports.oneOfType([
    propTypes$2.exports.number,
    propTypes$2.exports.string,
  ]),
  disabled: propTypes$2.exports.bool,
};
var omittedProps$1 = Object.keys(propTypes$1);
function sortableElement(WrappedComponent) {
  var _class, _temp;

  var config =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          withRef: false,
        };
  return (
    (_temp = _class =
      (function (_React$Component) {
        _inherits(WithSortableElement, _React$Component);

        function WithSortableElement() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, WithSortableElement);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(
            this,
            (_getPrototypeOf2 = _getPrototypeOf(WithSortableElement)).call.apply(
              _getPrototypeOf2,
              [this].concat(args),
            ),
          );

          _defineProperty(
            _assertThisInitialized(_assertThisInitialized(_this)),
            'wrappedInstance',
            createRef(),
          );

          return _this;
        }

        _createClass(WithSortableElement, [
          {
            key: 'componentDidMount',
            value: function componentDidMount() {
              this.register();
            },
          },
          {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
              if (this.node) {
                if (prevProps.index !== this.props.index) {
                  this.node.sortableInfo.index = this.props.index;
                }

                if (prevProps.disabled !== this.props.disabled) {
                  this.node.sortableInfo.disabled = this.props.disabled;
                }
              }

              if (prevProps.collection !== this.props.collection) {
                this.unregister(prevProps.collection);
                this.register();
              }
            },
          },
          {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
              this.unregister();
            },
          },
          {
            key: 'register',
            value: function register() {
              var _this$props = this.props,
                collection = _this$props.collection,
                disabled = _this$props.disabled,
                index = _this$props.index;
              var node = findDOMNode(this);
              node.sortableInfo = {
                collection: collection,
                disabled: disabled,
                index: index,
                manager: this.context.manager,
              };
              this.node = node;
              this.ref = {
                node: node,
              };
              this.context.manager.add(collection, this.ref);
            },
          },
          {
            key: 'unregister',
            value: function unregister() {
              var collection =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : this.props.collection;
              this.context.manager.remove(collection, this.ref);
            },
          },
          {
            key: 'getWrappedInstance',
            value: function getWrappedInstance() {
              invariant_1(
                config.withRef,
                'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call',
              );
              return this.wrappedInstance.current;
            },
          },
          {
            key: 'render',
            value: function render() {
              var ref = config.withRef ? this.wrappedInstance : null;
              return createElement(
                WrappedComponent,
                _extends(
                  {
                    ref: ref,
                  },
                  omit(this.props, omittedProps$1),
                ),
              );
            },
          },
        ]);

        return WithSortableElement;
      })(Component)),
    _defineProperty(_class, 'displayName', provideDisplayName('sortableElement', WrappedComponent)),
    _defineProperty(_class, 'contextType', SortableContext),
    _defineProperty(_class, 'propTypes', propTypes$1),
    _defineProperty(_class, 'defaultProps', {
      collection: 0,
    }),
    _temp
  );
}

var _excluded = ['dataSource', 'columns', 'onSortEnd', 'isSort', 'rowKey', 'sortKey', 'pagination'],
  _excluded2 = ['_1', '_2'];

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys$1(object);
  if (_Object$getOwnPropertySymbols$1) {
    var symbols = _Object$getOwnPropertySymbols$1(object);
    enumerableOnly &&
      (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) {
        return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var _context5, _context6;
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? _forEachInstanceProperty((_context5 = ownKeys(Object(source), !0))).call(
          _context5,
          function (key) {
            _defineProperty$1(target, key, source[key]);
          },
        )
      : _Object$getOwnPropertyDescriptors
      ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source))
      : _forEachInstanceProperty((_context6 = ownKeys(Object(source)))).call(
          _context6,
          function (key) {
            _Object$defineProperty$1(target, key, _Object$getOwnPropertyDescriptor(source, key));
          },
        );
  }
  return target;
}

var diffNodesSameLevel = function diffNodesSameLevel(oldNodes, newNodes, changeKey) {
  var matchKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'key';
  var re = [];

  _forEachInstanceProperty(oldNodes).call(oldNodes, function (oldNode) {
    var matchNewNode = _findInstanceProperty(newNodes).call(newNodes, function (newNode) {
      return newNode[matchKey] === oldNode[matchKey];
    });

    if (!matchNewNode) {
      re.push(oldNode);
    } else {
      if (oldNode[changeKey] !== matchNewNode[changeKey]) re.push(matchNewNode);
    }
  });

  return re;
};

var DragHandle = sortableHandle(function () {
  return React__default.createElement(MenuOutlined$1, {
    style: {
      cursor: 'grab',
      color: '#999',
    },
  });
});
var SortableItem = sortableElement(function (props) {
  return React__default.createElement('tr', _objectSpread({}, props));
});
var SortableBody = sortableContainer(function (props) {
  return React__default.createElement('tbody', _objectSpread({}, props));
});

var SortTable = function SortTable(props) {
  var propsDataSource = props.dataSource,
    propsColumns = props.columns,
    propsOnSortEnd = props.onSortEnd,
    _props$isSort = props.isSort,
    isSort = _props$isSort === void 0 ? true : _props$isSort,
    rowKey = props.rowKey,
    _props$sortKey = props.sortKey,
    sortKey = _props$sortKey === void 0 ? 'sort' : _props$sortKey,
    pagination = props.pagination,
    others = _objectWithoutProperties$1(props, _excluded);

  var _useState = useState([]),
    _useState2 = _slicedToArray$1(_useState, 2),
    dataSource = _useState2[0],
    setDataSource = _useState2[1];

  var _useState3 = useState([]),
    _useState4 = _slicedToArray$1(_useState3, 2),
    columns = _useState4[0],
    setColumns = _useState4[1];

  useEffect(
    function () {
      var _context;

      setColumns(
        isSort
          ? _concatInstanceProperty(
              (_context = [
                {
                  title: '排序',
                  dataIndex: sortKey,
                  width: 90,
                  render: function render() {
                    return React__default.createElement(DragHandle, null);
                  },
                },
              ]),
            ).call(_context, propsColumns)
          : propsColumns,
      );
      console.log(setColumns, propsColumns, DragHandle);
    },
    [isSort],
  );
  useEffect(function () {
    setDataSource(
      _mapInstanceProperty(propsDataSource).call(propsDataSource, function (i, index) {
        return _objectSpread(
          _objectSpread({}, i),
          {},
          {
            index: index,
          },
        );
      }),
    );
  }, []);

  var onSortEnd = /*#__PURE__*/ (function () {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/ regenerator.mark(function _callee(_ref) {
        var oldIndex, newIndex, _context2, _context3, oldData, newData, changeNodes;

        return regenerator.wrap(function _callee$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                (oldIndex = _ref.oldIndex), (newIndex = _ref.newIndex);

                if (!(oldIndex !== newIndex)) {
                  _context4.next = 11;
                  break;
                }

                oldData = _mapInstanceProperty(dataSource).call(
                  dataSource,
                  function (source, index) {
                    return _objectSpread(
                      _objectSpread({}, source),
                      {},
                      {
                        sort: index,
                      },
                    );
                  },
                );
                newData = _mapInstanceProperty(
                  (_context2 = arrayMoveImmutable(dataSource, oldIndex, newIndex)),
                ).call(_context2, function (item, index) {
                  return _objectSpread(
                    _objectSpread({}, item),
                    {},
                    {
                      sort: index,
                    },
                  );
                });
                changeNodes = _mapInstanceProperty(
                  (_context3 = diffNodesSameLevel(oldData, newData, sortKey, rowKey)),
                ).call(_context3, function (item) {
                  var node = {};
                  node[rowKey] = item[rowKey];
                  node[sortKey] =
                    item[sortKey] +
                    (pagination ? (pagination.current - 1) * pagination.pageSize : 0);
                  return node;
                });
                console.log(changeNodes, 'changeNodes');

                if (!(changeNodes.length === 0)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt('return');

              case 8:
                setDataSource(newData);
                _context4.next = 11;
                return propsOnSortEnd(changeNodes)['catch'](function () {
                  return setDataSource(oldData);
                });

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee);
      }),
    );

    return function onSortEnd(_x) {
      return _ref2.apply(this, arguments);
    };
  })();

  var DraggableContainer = function DraggableContainer(props) {
    return React__default.createElement(
      SortableBody,
      _objectSpread(
        {
          useDragHandle: true,
          disableAutoscroll: true,
          helperClass: 'row-dragging',
          onSortEnd: onSortEnd,
        },
        props,
      ),
    );
  };

  var DraggableBodyRow = function DraggableBodyRow(_ref3) {
    var _1 = _ref3._1,
      _2 = _ref3._2,
      restProps = _objectWithoutProperties$1(_ref3, _excluded2);

    console.log(_1, _2); // function findIndex base on Table rowKey props and should always be a right array index

    var index = _findIndexInstanceProperty(dataSource).call(dataSource, function (x) {
      return x.index === restProps['data-row-key'];
    });

    return React__default.createElement(
      SortableItem,
      _objectSpread(
        {
          index: index,
        },
        restProps,
      ),
    );
  };

  return React__default.createElement(
    Table,
    _objectSpread(
      {
        dataSource: dataSource,
        columns: columns,
        rowKey: 'index',
        components: {
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow,
          },
        },
        pagination: pagination,
      },
      others,
    ),
  );
};

var count = function count(x, y) {
  return x + y;
};

export { Button, SortTable, count };
