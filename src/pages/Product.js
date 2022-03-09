import React from 'react'
// import { humanize } from '../_helper/helper'
import { FaPencilAlt, FaEdit } from 'react-icons/fa'

// stets
export default function Product() {

	return (
		<>
			<div className="px-2">
				<div className="box">
					<div className='box-content p-0'>
						<div className='box-tools'>
							<div className='box-title'>
								<h3>Product List</h3>
								<div className='box-tool'>
									<button type='button' className='btn-primary btn-sm btn-icon'><FaPencilAlt className='icon'/> Add</button>
								</div>
							</div>
						</div>
						<div className="box-body mb-0">
							<div className="table-box">
								<div className="table-responsive">
									<div className="table-full mb-0 pt-0.5">
										<div className="table-main">
											<table className="table">
												<thead className="bg-gray-50">
													<tr>
														<th scope="col">
															Photo
														</th>
														<th scope="col">
															Title
														</th>
														<th scope="col">
															Category
														</th>
														<th scope="col">
															Qty
														</th>
														<th>
															Price
														</th>
														<th scope="col">
															<span className="sr-only">Edit</span>
														</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="">
															<div className="flex items-center">
																<div className="flex-shrink-0 h-10 w-10">
																	<img className="h-10 w-10 rounded-full" src="" alt="" />
																</div>
															</div>
														</td>
														<td className="">
															<div className="text-sm text-gray-900"></div>
														</td>
														<td className="">
															
														</td>
														<td className=" text-sm text-gray-500">
														</td>
														<td className=" text-sm text-gray-500">
														</td>
														<td className=" text-right text-sm font-medium">
															<button className="btn-warning btn-sm btn-icon"><FaEdit className='icon mx-1'/> Edit</button>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
