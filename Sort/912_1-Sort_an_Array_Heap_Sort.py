class Solution(object):
    def max_heapify(self, nums, heap_size, root_node_index):
        left_node_index = root_node_index * 2 + 1
        right_node_index = root_node_index * 2 + 2
        largest_index = root_node_index
        if (left_node_index <= heap_size - 1) and (
            nums[left_node_index] > nums[largest_index]
        ):
            largest_index = left_node_index
        if (right_node_index <= heap_size - 1) and (
            nums[right_node_index] > nums[largest_index]
        ):
            largest_index = right_node_index

        if largest_index != root_node_index:
            # 做swap
            nums[root_node_index], nums[largest_index] = (
                nums[largest_index],
                nums[root_node_index],
            )
            self.max_heapify(nums, heap_size, largest_index)

    def build_max_heap(self, nums, heap_size):
        first_root_node = heap_size // 2 - 1
        for root_node_index in range(first_root_node, -1, -1):
            self.max_heapify(nums, heap_size, root_node_index)

    def sortArray(self, nums):
        heap_size = len(nums)
        self.build_max_heap(nums, heap_size)
        for sort_index in range(heap_size - 1, -1, -1):
            nums[0], nums[sort_index] = nums[sort_index], nums[0]
            heap_size -= 1
            self.max_heapify(nums, heap_size, 0)
        return nums
