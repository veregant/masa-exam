

//16
// class DateData {
//     public static addMonths(date: Date, value: number): Date {
//         let expectedMonth: number = date.getMonth() + value;
//         if (expectedMonth > 11) {  //In Date type, moth are from 0 to 11;
//             expectedMonth = expectedMonth % 12;
//         }


//         if (expectedMonth < 0) {
//             expectedMonth += 12;
//         }

//         date.setMonth(date.getMonth() + value);
// 	        const daysToAdd: number = date.getMonth() >  expectedMonth ? -1 : 1;
// 	        while (date.getMonth() !== expectedMonth) {
// 		        date.setDate(date.getDate() + daysToAdd);
// 		    }
    
// 		    return  date;
//     }
// }

// let date: Date = new Date();
// date.setDate(31);
// console.log(date);
// DateData.addMonths(date, -4);
// console.log(date);





//18
// let numArr: number[] = [1, 2, 3, 4, 5];

// const GetSum = (numArr: number[]) : number => {
//     let sum: number = 0;
//     numArr.forEach((num) => {
//         sum += num;
//     })
//     return sum;
// }

// console.log(GetSum(numArr));


//19
// class PadLeft {
//     public static padLeft(input: number, places: number): string {
//         const zeroes: number = places - input.toString().length + 1;
//         return Array(+(zeroes > 0 && zeroes)).join("0") + input.toString();
//     }
// }


// console.log(PadLeft.padLeft(222, 4));

//this code shiftes zeroes to the "input" to create some padding. "input" length becomes not shorter then "places".


// //20
// interface user {
// 			id: number;
// 			firstName: string;
// 			lastName: string;
// 		}
		
// 		interface dbUser {
// 			id: number;
// 			first_name: string;
// 			last_name: string;
// 		}
		
// 		interface role {
// 			id: number;
// 			userIds: number[];
// 		}
		
// 		interface dbRole {
// 			id: number;
// 			user_id: number;
// 		}
		

//         class Service {
// 		public isUserPermitted(userId: number, roleId: number): Promise<user> {
// 			return new Promise<user>((resolve, reject) => {
// 				Promise.all([
// 					this.getUser(userId),
// 					this.getRole(roleId)
// 				])
// 				.then((results: [user, role]) => {                  //switch '|' to ',' because the result should be an array;
// 					return results[1].userIds.indexOf(results[0].id) > -1;
// 					resolve(results[0]);
// 				});
// 			});
// 		}
		
// 		private getUser(userId: number): Promise<user> {
// 			return new Promise<user>((resolve, reject) => {
// 				// Access to the DB that returns the user data by id as dbUser or null
// 			});
// 		}
		
// 		private getRole(roleId: number): Promise<role> {
// 			return new Promise<role>((resolve, reject) => {         //switch 'user' to 'role' because we shoul return Promise<role>
// 				// Access to the DB that returns the role data by id as array of dbRole or null
// 			});
// 		}
//     }