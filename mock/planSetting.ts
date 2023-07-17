// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { parse } from 'url';
import { TableListItem, TableListParams } from '@/pages/ListTableList/data';

// mock tableListDataSource
const genList = () => {
  // const tableListDataSource: TableListItem[] = [];
  const tableListDataSource: TableListItem[] =[{
    "delivery_wave_id": 1,// 派车波次id
    "route_counts": 12,// 对应波次下的路线总数
    "point_counts": 200,// 对应波次下的站点总数
    "routes": [{ //对应波次下的所有路线数据
            "route_id": 1,// 路线id
            "point_count": 40,// 路线对应的站点数
            "distance": 11,// 路线距离
            "volume": 300,// 总体积
            "driver_id": 10245,// 司机id
            "driver_name": "zhangsan",// 司机名称
            "vehicle_type": "M-500L",// 车辆类型
            "shipping_fee": 133.56// 总配送费
        },
        {
            "route_id": 2,
            "point_count": 40,
            "distance": 11,
            "volume": 300,
            "driver_id": 10245,
            "driver_name": "zhangsan",
            "vehicle_type": "M-500L",
            "shipping_fee": 133.56
        }
    ]
}, {
    "delivery_wave_id": 2,
    "route_counts": 20,
    "point_counts": 158,
    "routes": [{
            "route_id": 5,
            "point_count": 40,
            "distance": 11,
            "volume": 300,
            "driver_id": 10245,
            "driver_name": "zhangsan",
            "vehicle_type": "M-500L",
            "shipping_fee": 133.56
        },
        {
            "route_id": 8,
            "point_count": 40,
            "distance": 11,
            "volume": 300,
            "driver_id": 10245,
            "driver_name": "zhangsan",
            "vehicle_type": "M-500L",
            "shipping_fee": 133.56
        }
    ]}]
  tableListDataSource.reverse();
  return tableListDataSource;
};

let tableListDataSource = genList();

function getSetting(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  // const { current = 1, pageSize = 10 } = req.query;
  const params = (parse(realUrl, true).query as unknown) as TableListParams;

  let dataSource = [...tableListDataSource]

  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
  };

  return res.json(result);
}

function postSetting(req: Request, res: Response, u: string, b: Request) {
  console.log(req)
  console.log(res)
  console.log(u)
  console.log(b)
  // let realUrl = u;
  // if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
  //   realUrl = req.url;
  // }

  const body = (b && b.body) || req.body;
  // const { method, name, desc, key, inventory_id, delivery_id } = body;
  const { method } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    // case 'delete':
    //   tableListDataSource = tableListDataSource.filter((item) => key.indexOf(item.key) === -1);
    //   break;
    case 'post':
      (() => {
        const result = {
          data: tableListDataSource,
          total: tableListDataSource.length,
          success: true,
        };
      
        return res.json(result);
      })();
      return;

    // case 'update':
    //   (() => {
    //     let newRule = {};
    //     tableListDataSource = tableListDataSource.map((item) => {
    //       if (item.key === key) {
    //         newRule = { ...item, inventory_id, delivery_id };
    //         return { ...item, inventory_id, delivery_id };
    //       }
    //       return item;
    //     });
    //     return res.json(newRule);
    //   })();
    //   return;
    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };

  res.json(result);
}

export default {
  'GET /api/setting': getSetting,
  'POST /api/setting': postSetting,
};
